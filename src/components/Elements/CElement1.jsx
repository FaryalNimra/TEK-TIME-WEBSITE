import React from 'react';
import './CElement1.scss'; // Ensure the path is correct

const CElement1 = () => {
  return (
    <div className="celement2-container container">
      <div className="text-center">
        <h2 className="celement2-heading">Contact us</h2>
        <p className="celement2-paragraph">With lots of unique blocks, you can easily build a page without coding.<br /> Build your next consultancy website within few minutes.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="celement2-content">
            <img src="/Assests/phone-2.png" alt="Icon" className="img-fluid" />
            <div>
              <h3 className="celement2-subheading">Call us</h3>
              <p className="celement2-subparagraph">+1-940-394-2948<br />+1-389-385-3807</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="celement2-content">
            <img src="/Assests/Icon (4).png" alt="Icon" className="img-fluid" />
            <div>
              <h3 className="celement2-subheading">Email us</h3>
              <p className="celement2-subparagraph">info@tektime.io</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="celement2-content">
            <img src="/Assests/Icon (5).png" alt="Icon" className="img-fluid" />
            <div>
              <h3 className="celement2-subheading">Visit us</h3>
              <p className="celement2-subparagraph">34 Madison Street,<br />NY, USA 10005</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CElement1;
