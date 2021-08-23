import  { useState } from "react"; 
import { post } from 'axios'; 


function RecordAdd(props) {
  const state = { first_name: '', last_name: '', address1: '', address2: '', city: '', state: '', zip: []}
  const [record, setRecord] = useState(state) 
  const [checked, setChecked] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function toggle() {
    setChecked(!checked)
  
  }

  function handleChange(event) { 
    setRecord({...record, [event.target.name]: event.target.value})
  }  
  function handleSubmit(event) { 
    event.preventDefault();  

    async function postRecord() {
      try {
         await post('/api/records', record); 
         
        props.history.push('/success/'); 
      } catch(error) {
        setErrorMessage(error.response.data.message);
    
      }
    }
    postRecord();
  }

  function handleCancel() {
    props.history.push("/records");
  }

  
  return ( 
    <div>
      <h1>Create a Record</h1>
      <hr/>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
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
         <input type="checkbox"  onChange={toggle}  ></input>
         {checked === true ? (
           <input name="address2" placeholder="Enter Address 2" type="text"  value={record.address2} onChange={handleChange} className="form-control" required/>) :
         (<input name="address2" type="text"  value={record.address2} onChange={handleChange} className="form-control" />)}
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
          <input type="submit" value="Submit" className="btn btn-primary" required/>
          <button type="button" onClick={handleCancel} className="btn btn-outline-danger">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default RecordAdd;