"use strict";
import { React, useState } from 'react';

function FeedbackForm() {
    return (
      <div className="Feedback">
        <div>
          <h2 style={{ color: 'blue' }}>Survey</h2>
          <h2>Please look below to complete a satisfaction survey</h2>
          <iframe
            width="1000"
            height="675"
            src="https://kyhbse2ktpm.typeform.com/to/ytoSAgtK"
            title="GeeksforGeeks"
          ></iframe>
        </div>
      </div>
    );
  }
  

export default FeedbackForm;

