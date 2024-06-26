import React from 'react';
// import './App.css';

const Elevator = ({ currentFloor }) => {
  return (
    <div className="elevator" style={{ bottom: `${currentFloor * 100}px` }}>
      Elevator
    </div>
  );
};

export default Elevator;
