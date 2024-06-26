import React, { useState, useEffect } from 'react';
import Elevator from './matchineCoding/ElevatorCode/Elevator';
import ControlPanel from './matchineCoding/ElevatorCode/ControlPanel';
import './App.css';

const floors = [6, 5, 4, 3, 2, 1, 0];

function App() {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [targetFloors, setTargetFloors] = useState([]);

  useEffect(() => {
    if (targetFloors.length > 0) {
      const nextFloor = targetFloors[0];
      if (currentFloor !== nextFloor) {
        const timer = setTimeout(() => {
          setCurrentFloor(prev => (prev < nextFloor ? prev + 1 : prev - 1));
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setTargetFloors(prev => prev.slice(1)); // Remove the reached floor from the queue
      }
    }
  }, [currentFloor, targetFloors]);

  const handleFloorSelection = floor => {
    setTargetFloors(prev => {
      const newTargets = [...prev];
      if (!newTargets.includes(floor)) {
        newTargets.push(floor);
        newTargets.sort(
          (a, b) => Math.abs(currentFloor - a) - Math.abs(currentFloor - b)
        );
      }
      return newTargets;
    });
  };

  return (
    <div className="App">
      <div className="building">
        {floors.map(floor => (
          <div key={floor} className={`floor current`}>
            {floor}
          </div>
        ))}
        <Elevator currentFloor={currentFloor} />
      </div>
      <ControlPanel onSelectFloor={handleFloorSelection} floors={floors} />
    </div>
  );
}

export default App;
