import React from 'react';
import './PElement2.scss'; // Ensure the path is correct

const PElement2 = () => {
  return (
    <div className="Pelement2-container container">
      <div className="text-center">
      <h2 className="Pelement2-heading">Check our features</h2>
        <p className="Pelement2-paragraph">With lots of unique blocks, you can easily build a page without coding.<br></br> Build your next consultancy website within few minutes.</p>
       
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="Pelement2-content">
            <img src="/Assests/preferences-circle.png" alt="Icon" className="img-fluid" />
            <h3 className="Pelement2-subheading">Quick setup process</h3>
            <p className="Pelement2-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Pelement2-content">
            <img src="/Assests/ic_shopping_cart_48px.png" alt="Icon" className="img-fluid" />
            <h3 className="Pelement2-subheading">Create custom orders</h3>
            <p className="Pelement2-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Pelement2-content">
            <img src="/Assests/coupon.png" alt="Icon" className="img-fluid" />
            <h3 className="Pelement2-subheading">Multiple coupons</h3>
            <p className="Pelement2-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Pelement2-content">
            <img src="/Assests/ic_layers_48px.png" alt="Icon" className="img-fluid" />
            <h3 className="Pelement2-subheading">Organize your campaigns</h3>
            <p className="Pelement2-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Pelement2-content">
            <img src="/Assests/chart-bar-33.png" alt="Icon" className="img-fluid" />
            <h3 className="Pelement2-subheading">Manage customers</h3>
            <p className="Pelement2-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="Pelement2-content">
            <img src="/Assests/a-sync.png" alt="Icon" className="img-fluid" />
            <h3 className="Pelement2-subheading">Track progress fast</h3>
            <p className="Pelement2-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PElement2;
