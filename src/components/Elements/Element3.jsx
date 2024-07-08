import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element3.scss'; // Ensure the path is correct

const Element3 = () => {
  return (
    <div className="container">
      <div className="row">
      
        <div className="col-md-4">
          <div className="text-center">
            <h2>10K+</h2>
            <p>Customers utilize TekTime every month to manage their moments.</p>
          </div>
        </div>

   
        <div className="col-md-4">
          <div className="text-center">
            <h2>92%</h2>
            <p>Satisfaction rate comes from our awesome customers.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="text-center">
            <h2>4.9/5.0</h2>
            <p>Average customer ratings we have got all over internet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element3;
