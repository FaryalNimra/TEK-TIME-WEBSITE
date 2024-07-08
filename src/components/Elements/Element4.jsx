import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element4.scss'; // Ensure the path is correct

const Element4 = () => {
  return (
    <div className="element4-container container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src="/Assests/Laptop.png" alt="Laptop" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h2 className="element4-heading">Track moment’s progress with our advanced platform</h2>
          <p className="element4-paragraph">
            Track the progress of meetings and their steps effortlessly with this platform, featuring real-time updates, task assignments, and comprehensive analytics
          </p>
          <button className="btn btn-primary btn-left-align">Get a demo now</button>
        </div>
      </div>
    </div>
  );
};

export default Element4;
