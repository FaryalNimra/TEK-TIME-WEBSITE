import React from 'react';
import './Element9.scss'; // Ensure the path is correct

const Element9= () => {
  return (
    <div className="element9-container container">
      <div className="text-center">
      
        <h2 className="element9-heading">Features of Tektime</h2>
        <p className="element9-paragraph1">Enhance your team's productivity and streamline your workflow with Tektime.</p>
     
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="element9-content">
            <img src="/Assests/Group 169.png" alt="Icon" className="img-fluid" />
            <h3 className="element9-subheading">Productive meetings</h3>
            <img src="/Assests/Line 13.png"alt="Icon" className="img-fluid" />
            <p className="element9-subparagraph">Maximize efficiency and collaboration in every meeting.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="element9-content">
            <img src="/Assests/Group 171.png" alt="Icon" className="img-fluid" />
            <h3 className="element8-subheading">Clear Roadmaps</h3>
            <img src="/Assests/Line 13.png"alt="Icon" className="img-fluid" />
            <p className="element8-subparagraph">Visualize your project's future with dynamic and easy-to-follow roadmaps.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="element9-content">
            <img src="/Assests/streamline_arrow-roadmap.png" alt="Icon" className="img-fluid" />
            <h3 className="element9-subheading">Detailed Reports</h3>
            <img src="/Assests/Line 13.png"alt="Icon" className="img-fluid" />
            <p className="element9-subparagraph">Receive comprehensive reports summarizing key points and action items.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="element9-content">
            <img src="/Assests/fluent-emoji-high-contrast_receipt.png"alt="Icon" className="img-fluid" />
            <h3 className="element9-subheading">Automatic Transcriptions</h3>
            <img src="/Assests/Line 13.png"alt="Icon" className="img-fluid" />
            <p className="element9-subparagraph">Capture every word with precise, real-time transcription.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element9;
