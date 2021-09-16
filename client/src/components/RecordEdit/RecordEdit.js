import  { useState, useEffect } from "react"; 
import axios from 'axios'; 
import { useAuth0 } from "@auth0/auth0-react";
import Toggle from "../hooks/useToggle/Toggle";


function RecordEdit(props) {
  const initialState = { first_name: '', last_name: '', address1: '', address2: '', city: '', state: '', zip: []}
  const [record, setRecord] = useState(initialState);

const { getAccessTokenSilently } = useAuth0();

  useEffect(()=>{
    async function fetchRecord (){
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get(`/api/records/${props.match.params.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                    }
            });
            setRecord(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    fetchRecord();          
    // eslint-disable-next-line
    }, [props.match.params.id]);


  function handleChange(event) { 
    setRecord({...record, [event.target.name]: event.target.value})
  }  

  function handleSubmit(event) { 
    event.preventDefault();  

    async function updateRecord() {
      try {
         const token = await getAccessTokenSilently();
         await axios.patch(`/api/records/${props.match.params.id}`, record, {
            headers: {
                Authorization: `Bearer ${token}` 
                }
        }); 
         alert('Record updated successfully!');
        props.history.push('/records/'); 
      } catch(error) {
        console.log('error', error.response);
    
      }
    }
    updateRecord();
  }

  function handleCancel() {
    props.history.push("/records");
  }

  
  return ( 
    <div>
      <h1>Edit the Record of {record.first_name} {record.last_name}</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label>First Name</label>
          <input name="first_name" placeholder="Enter first name" type="text"  value={record.first_name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input name="last_name"  placeholder="Enter last name" type="text" value={record.last_name} onChange={handleChange} className="form-control" required/>
        </div>
        <div className="form-group">
          <label>Address1</label>
          <input name="address1" placeholder="Enter address" type="text" value={record.address1} onChange={handleChange} className="form-control" required/>
        </div>
        <div className="form-group">
          <label>Address2</label>
          <Toggle value={record.address2} change={handleChange} name="address2" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input name="city" placeholder="Enter city" type="text" value={record.city} onChange={handleChange} className="form-control" required/>
        </div>
        <div className="form-group">
          <label>State</label>
          <input name="state" placeholder="Enter state" type="text" value={record.state} onChange={handleChange} className="form-control" required/>
        </div>
        <div className="form-group">
          <label>Zip</label>
          <input name="zip" placeholder="Enter minimum 5, maximum 9 digits" type="text" inputMode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" value={record.zip} onChange={handleChange} className="form-control" required/>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input name="country" type="text" value="US" className="form-control" readOnly/>
        </div>
        <div className="btn-toolbar">
          <input type="submit" value="Update" className="btn btn-primary" required/>
          <button type="button" onClick={handleCancel} className="btn btn-outline-danger">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default RecordEdit;