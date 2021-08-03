import { useState, useEffect, useMemo } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import debounce from "lodash.debounce";


function RecordsList(props) {
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState("");


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



 async function handleDelete(id){
    try {
      const response = await axios.delete(`/api/records/${id}`);
      console.log(response.data.message);
      getRecords();
    } catch(error) {
      console.log('error', error);
    }
 }

 const renderHeader = () => {
  let headerElement = ['first name', 'last name', 'address1', 'address2', 'city', 'state', 'zip', 'country', 'date',]

  return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
  })
}

const renderBody = () => {
  return filteredRecords && filteredRecords.sort((a,b)=> {
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
                  <button onClick={() => handleDelete(_id)}>Delete</button>
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