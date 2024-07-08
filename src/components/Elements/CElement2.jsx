import React from 'react';
import './CElement2.scss'; // Ensure the path is correct

const CElement2 = () => {
  return (
    <div className="celement2-container container">
      <h3 className='celement2-heading'>Send Us Message</h3>
      <form className="row g-3">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First & Last Name</label>
            <input type="text" className="form-control" id="firstName" placeholder="John Doe" />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" placeholder="123-456-7890" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Your message here..."></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="john.doe@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Subject of your message" />
          </div>
          <div className="d-flex justify-content-start mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CElement2;
