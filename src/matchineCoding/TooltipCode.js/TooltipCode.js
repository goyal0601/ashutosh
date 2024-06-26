// src/App.js
import React from 'react';
import Tooltip from './Tooltip';

const TooltipCode = () => {
  return (
    <div className="TooltipCode">
      <h1>React Tooltip Example</h1>
      <Tooltip text="This is a tooltip">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
};

export default TooltipCode;
