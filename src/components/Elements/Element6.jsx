import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element6.scss'; // Ensure the path is correct

const Element6 = () => {
  return (
    <div className="element6-container container">
      <div className="row">
        
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src="/Assests/4.png" alt="Laptop" className="img-fluid10" />
        </div>
        
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h2 className="element6-heading">Make your customers happy by giving services.</h2>
          <p className="element6-paragraph">
          Save your precious time by not worrying about meetings, as this platform handles scheduling, management, and follow-ups effortlessly
          </p>
          <button className="btn btn-primary btn-left-align">Get a demo now</button>
        </div>
      </div>
    </div>
  );
};

export default Element6;
