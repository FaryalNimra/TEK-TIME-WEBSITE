import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <img src="Assests/Wordpress Transparent.png" alt="Logo" className="logo-image" />
          <br />
          <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <div className="box">
          <h4>Company</h4>
          <br />
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="box">
          <h4>Product</h4>
          <br />
          <p>Features</p>
          <p>Pricing</p>
          <p>News</p>
        </div>
        <div className="box">
          <h4>Services</h4>
          <br />
          <p>Content Writing</p>
          <p>Digital Marketing</p>
          <p>SEO For Business</p>
          <p>UI Design</p>
        </div>
        <div className="box">
          <h4>Legal</h4>
          <br />
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>

    </section>
  );
}

export default Footer;
