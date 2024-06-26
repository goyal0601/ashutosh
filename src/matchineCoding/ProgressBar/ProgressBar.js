import React, { useState, useEffect } from 'react';
import Progress from './Progress';

function Progressbar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Progressbar">
      <h1>React Progress Bar</h1>
      <Progress progress={progress} />
    </div>
  );
}

export default Progressbar;
