import { Link } from 'react-router-dom';

export default function RecordSuccess() {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <p>
            Record created successfully. You are all set!
          </p>
          <p>
            Thank you!
          </p>
        </div>
        <Link to="/records/" className="btn btn-primary float-right">View Records</Link> 
      </div>
    );
  }