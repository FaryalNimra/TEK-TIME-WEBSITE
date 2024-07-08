import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element2.scss'; // Ensure the path is correct

const Element2 = () => {
  return (
    <div className="element2-container">
      <div className="text-left">
        <p className="element2-paragraph1">What is Tek Time?</p>
        <h1 className="element2-heading">Scheduling and managing meetings used to be<br /> challenging, but this platform makes it effortless</h1>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <img src="/Assests/1.png" alt="Image 1" className="img-fluid img-padding" />
        </div></div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img src="/Assests/2.png" alt="Image 2" className="img-fluid img-padding mr-3" />
            <img src="/Assests/3.png" alt="Image 3" className="img-fluid img-padding" />
          </div>
          <p className="element2-paragraph">
            TekTime is a comprehensive platform for seamless scheduling, conducting, and managing meetings with robust collaboration, task management, and integration features. It enhances productivity by offering real-time collaboration tools, automated reminders, and detailed analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Element2;
