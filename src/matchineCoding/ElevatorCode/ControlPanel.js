import React from 'react';
// import './App.css';

const ControlPanel = ({ onSelectFloor, floors }) => {
  return (
    <div className="control-panel">
      {floors.map(floor => (
        <button key={floor} onClick={() => onSelectFloor(floor)}>
          {floor}
        </button>
      ))}
    </div>
  );
};

export default ControlPanel;
