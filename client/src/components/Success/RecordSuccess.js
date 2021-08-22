import { Link } from 'react-router-dom';

export default function RecordSuccess() {
    return (
      <div className="row justify-content-center">
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <p>
          All set!<br />
          Record created successfully.<br />
          </p>
          <p>
            Thank you!
          </p>
        </div>
        <Link to="/records/" className="btn btn-primary btn-block">View Records</Link> 
      </div>
    );
  }