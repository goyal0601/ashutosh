import React, { useState, useEffect } from 'react';
import Elevator from './Elevator';
import './ElevatorCode.css';
import ControlPanel from './ControlPanel';

const floors = [6, 5, 4, 3, 2, 1, 0];

function ElevatorCode() {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [targetFloors, setTargetFloors] = useState([]);

  const interval = React.useRef();

  const handleFloorSelection = floor => {
    if (!targetFloors[floor] && floor !== currentFloor) {
      const newRequests = [...targetFloors];
      newRequests[floor] = true;
      setTargetFloors(newRequests);
    }
  };

  const moveToFloor = React.useCallback(
    floor => {
      setCurrentFloor(floor);
      const newRequests = [...targetFloors];
      newRequests[floor] = false;
      setTargetFloors(newRequests);
    },
    [targetFloors]
  );

  // Check for requests, process requests
  useEffect(() => {
    clearTimeout(interval.current);
    interval.current = setInterval(() => {
      for (let i = currentFloor; i < floors.length; i++) {
        if (targetFloors[i]) {
          moveToFloor(i);
          return;
        }
      }
      for (let i = currentFloor; i >= 0; i--) {
        if (targetFloors[i]) {
          moveToFloor(i);
          return;
        }
      }
    }, 2000);
  }, [currentFloor, targetFloors, moveToFloor]);

  return (
    <div>
      <div className="building">
        {floors.map(floor => (
          <div key={floor} className={`floor`}>
            {floor}
          </div>
        ))}
        <Elevator currentFloor={currentFloor} />
      </div>
      <ControlPanel onSelectFloor={handleFloorSelection} floors={floors} />
    </div>
  );
}

export default ElevatorCode;
