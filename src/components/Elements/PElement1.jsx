import React, { useState } from 'react';
import './PElement1.scss'; // Ensure the path is correct
import NElement2 from './NElement2'; // Import the child component

const PElement1 = () => {
  const [showNElement2, setShowNElement2] = useState(false);

  const handleButtonClick = () => {
    setShowNElement2(true); // Set state to display NElement2
  };

  return (
    <div className="Pelement1-container container">
      <div className="text-center">
        <h3 className="Pelement1-heading1">Pricing & Plans</h3>
        <p className="Pelement1-paragraph">
          With lots of unique blocks, you can easily build a page without coding.
          <br />
          Build your next consultancy website within a few minutes.
        </p>
      </div>

      {/* Pricing Plan 1 */}
      <div className="row">
        <div className="col-md-6">
          <div className="Pelement1-content">
            <p className="Pelement1-section-paragraph">Offer Free for 3 months</p>
            <h3 className="Pelement1-heading">For 1 licence</h3>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <button className="btn btn-primary">
            Start Free Trial Now
          </button>
        </div>
      </div>

      {/* Pricing Plan 2 (similar structure repeated for other plans) */}
      <div className="row">
        <div className="col-md-6">
          <div className="Pelement1-content">
            <p className="Pelement1-section-paragraph">The offer S (Small)</p>
            <h3 className="Pelement1-heading">For 3 licences</h3>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Start Free Trial Now
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="Pelement1-content">
            <p className="Pelement1-section-paragraph">The offer M (Medium)</p>
            <h3 className="Pelement1-heading">For 5 licences</h3>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <button className="btn btn-primary">
            Start Free Trial Now
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="Pelement1-content">
            <p className="Pelement1-section-paragraph">The offer L (Large)</p>
            <h3 className="Pelement1-heading">For 15 licences</h3>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <button className="btn btn-primary">
            Start Free Trial Now
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="Pelement1-content">
            <p className="Pelement1-section-paragraph">The offer XL (X Large)</p>
            <h3 className="Pelement1-heading">For 50 licences</h3>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <button className="btn btn-primary">
            Start Free Trial Now
          </button>
        </div>
      </div>

      {/* Conditional Rendering of NElement2 */}
      {showNElement2 && <NElement2 />}

    </div>
  );
};

export default PElement1;
