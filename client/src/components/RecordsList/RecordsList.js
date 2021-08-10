import { useState, useEffect, useMemo } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import debounce from "lodash.debounce";
import ModalDelete from '../Modals/ModalDelete';


function RecordsList(props) {
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(
    {
      show: false,
      id: null,
    }
  )

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

  const confirm = (id) => {
    setShowModal({
      show: true,
      id,
    });
  };

 async function handleDelete(){
    try {
      const response = await axios.delete(`/api/records/${showModal.id}`);
      console.log("Darn IT!")
      console.log(response.data.message);
      setMessage(response.data.message);
      setShowModal({
        show: false,
        id: null,
      });
      getRecords();
    } catch(error) {
      console.log('error', error);
    }
 }

   const handleDeleteFalse = () => {
    setShowModal({
      show: false,
      id: null,
    });
  };
  
 const renderHeader = () => {
  let headerElement = ['first name', 'last name', 'address1', 'address2', 'city', 'state', 'zip', 'country', 'date',]

  return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
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
              <td className='operation'>
                <Link to={`/records/${_id}/edit`}className="btn btn-primary">Edit</Link> 
                  <button onClick={() => confirm(_id)}>Delete</button>
              </td>
          </tr>
      )
  })
}

  
  return (
    <div>
      <h2>
        Records
        <Link to="/records/new" className="btn btn-primary float-right">New Record</Link> 
      </h2>
      <hr/>
       <div>
      <input
        onChange={debouncedChangeHandler}
        type="text"
        placeholder="Search records..."
      />
      {message? <div className="alert alert-primary" role="alert">{message}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setMessage("")}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div> : null}
      {showModal.show && (
                    <ModalDelete
                      handleDelete={handleDelete}
                      handleDeleteFalse={handleDeleteFalse}
                    />
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