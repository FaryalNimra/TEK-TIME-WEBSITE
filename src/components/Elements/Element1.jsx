import React from 'react';
import './Element1.scss'; // Ensure the path is correct

const Element1 = () => {
  return (
    <div className="element1-container">
      <div className="image-container">
        <img src="/Assests/Option 1.png" alt="Image" className="element1-image" />
      </div>
      <div className="white-background">
        <div className="row">
          <div className="column">MakeLess</div>
          <div className="column">coworks</div>
          <div className="column">greener</div>
          
          <div className="column">SAAS<br></br>TODAY</div>
          <div className="column">Dorfus</div>
          <div className="column">askimat</div>
        </div>
      </div>
    </div>
  );
};

export default Element1;
