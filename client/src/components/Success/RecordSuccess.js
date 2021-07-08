import { Link } from 'react-router-dom';

export default function RecordSuccess() {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <p>
          All set! Record created successfully. 
          Click the link to view the records!  
          </p>
          <p>
            Thank you!
          </p>
        </div>
        <Link to="/records/" className="btn btn-primary float-right">View Records</Link> 
      </div>
    );
  }