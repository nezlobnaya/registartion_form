import { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

function RecordsList(props) {
  const [records, setRecords] = useState([])


  useEffect(() => {
    async function getRecords() {
      try {
        const response = await axios.get("/api/records");
        setRecords(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }        
    getRecords();
  }, []);


  return (
    <div>
      <h2>
        Records
        <Link to="/records/new" className="btn btn-primary float-right">New Record</Link> 
      </h2>
      <hr/>
      {records
        .sort((a,b)=> {
            return b.date > a.date ? 1: -1
        })
        .map((record) => {
        return(
        
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" ,listStyleType: "none", paddingRight: "10px" }}key={record._id}>
            <li>{record.first_name}</li>
            <li>{record.last_name}</li>
            <li>{record.address1}</li>
            <li>{record.address2}</li>
            <li>{record.city}</li>
            <li>{record.state}</li>
            <li>{record.zip}</li>
            <li>{record.country}</li>
            <li>{moment(record.date).toString()}</li>
            <hr/>
          </div>
        )     
      })}
    </div>
  )
}

export default RecordsList;