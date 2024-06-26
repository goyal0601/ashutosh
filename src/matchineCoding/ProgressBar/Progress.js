// src/ProgressBar.js
import React from 'react';
// import './ProgressBar.css';

const Progress = ({ progress }) => {
  const containerStyles = {
    height: 20,
    width: '500px',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: '0 50px'
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: progress > 66 ? 'green' : progress > 33 ? 'orange' : 'red',
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 1s ease-in-out'
  };

  const labelStyles = {
    minWidth: '10px',
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default Progress;
