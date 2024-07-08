import React from 'react';
import './Element10.scss'; // Ensure the path is correct

const Element10 = () => {
  return (
    <div className="element10-container container">
      <div className="row">
        <div className="col-md-6">
          <div className="element10-content">
            <h2 className="element10-heading">Ready to automate your moments?</h2>
            <p className="element10-paragraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <button className="btn btn-primary">Start Now</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="element10-form-container">
            <form className="element10-form">
              <div className="form-group">
              <div className="element10-image">
            <img src="/Assests/emojione_cookie.png" alt="Icon" className="img-fluid" />
          </div>
                <h2 className="element10-heading">We use cookies</h2>
                
                <p className="element10-paragraph">This website uses cookies to ensure you get the best experience.</p>
              </div>
              <button type="submit" className="btn btn-primary">Accept All Cookies</button><br></br><br></br>
              <p>Our cookie policy</p>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Element10;
