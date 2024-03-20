"use strict";
import { React, useState } from 'react';

function FeedbackForm() {
    return (
      <div className="Feedback">
        <div>
          <h2 style={{ color: 'green' }}>GeeksforGeeks</h2>
          <h2>How to create an Iframe in React</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tmg6d3T_T6Q"
            title="GeeksforGeeks"
          ></iframe>
        </div>
      </div>
    );
  }
  

export default FeedbackForm;


