import React from 'react';
import './NElement1.scss'; // Ensure the path is correct

const NElement1 = () => {
  return (
    <div className="nelement1-container">
      <div className="overlay">
        <div className="row align-items-center h-100">
          <div className="col-md-6 text-left content">
            <h2 className="nelement1-heading">Manage all your moments,<br />with our solution</h2>
            <p className="nelement1-paragraph">For each of your business issues</p>
            <button className="btn btn-primary1">Get a Free Demo Now</button>
          </div>
          <div className="col-md-6 text-right">
            <img src="/Assests/hj.png" alt="Your Image" className="img-fluid right-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NElement1;
