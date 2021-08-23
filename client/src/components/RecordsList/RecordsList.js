import { useState, useEffect, useMemo } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import debounce from "lodash.debounce";
import { MDBIcon } from 'mdbreact'
import DeleteConfirmation from '../Modals/Modal1/DeleteConfirmation';


function RecordsList(props) {
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState("");
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);


  async function getRecords() {
    try {
      const response = await axios.get("/api/records");
      setRecords(response.data);
    } catch(error) {
      console.log('error', error);
    }
  } 

  useEffect(() => {
    getRecords();
  }, []);

  let filteredRecords = records;

  if (query !== "") {
    filteredRecords = records.filter((record) => {
      return record.last_name.toLowerCase().includes(query.toLowerCase()) || record.first_name.toLowerCase().includes(query.toLowerCase()) || record.city.toLowerCase().includes(query.toLowerCase()) || record.state.toLowerCase().includes(query.toLowerCase()) ;
    });
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, 300);
  }, []);

  const showDeleteModal = (id) => {
    setId(id);
    setDisplayConfirmationModal(true);
    setDeleteMessage("Are you sure you want to delete this record?This action cannot be undone");
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
    setDeleteMessage(null);
    setId(null);
  };

 async function handleDelete(){
    try {
      const response = await axios.delete(`/api/records/${id}`);
      if (response.data.message === "Record deleted successfully.") {
        setDeleteMessage("Record deleted successfully!");
        getRecords();
      }
    } catch(error) {
      console.log('error', error);
    }
  }


  
 const renderHeader = () => {
  let headerElement = ['first name', 'last name', 'address1', 'address2', 'city', 'state', 'zip', 'country', 'date',]

  return headerElement.map((key, index) => {
      return <th key={index} className="nav-item font-weight-normal" style={{backgroundColor: "#e3f2fd", color:"black"}}>{key.toUpperCase()}</th>
  })
}

const renderBody = () => {
  return filteredRecords?.sort((a,b)=> {
    return b.date > a.date ? 1: -1
    }).map(({_id, first_name, last_name, address1, address2, city, state, zip, country, date }) => {
      return (
          <tr key={_id}>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{address1}</td>
              <td>{address2}</td>
              <td>{city}</td>
              <td>{state}</td>
              <td>{zip}</td>
              <td>{country}</td>
              <td>{moment(date).toString()}</td>
              <td className='operation' style={{backgroundColor: "#e3f2fd"}} >
                <Link to={`/records/${_id}/edit`}  className="btn btn-primary">Edit</Link> 
                  <MDBIcon far icon="trash-alt" onClick={() => showDeleteModal(_id)} className='btn btn-danger'></MDBIcon>
              </td>
          </tr>
      )
  })
}

  
  return (
    <div>
      <h2>
        Records
        <Link to="/records/new" className="btn btn-outline-primary float-right">New Record</Link> 
      </h2>
      <hr/>
       <div>
      <input
        onChange={debouncedChangeHandler}
        type="text"
        placeholder="Search records..."
      />
      {displayConfirmationModal && (
        <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={handleDelete} hideModal={hideConfirmationModal} message={deleteMessage} id={id} />
                  )}
      <table id='records'>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>
      <div>{filteredRecords.length === 0 && query !== "" && "No matches found..."}</div> 
     </div> 
    </div>
  )
}

export default RecordsList;

