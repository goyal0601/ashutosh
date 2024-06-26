import { useState } from 'react';
import ToDoList from './toDoList/ToDoList';
import FeatureFlag from './featureFlag/FeatureFlag';
import ImageSlider from './imageSlider/ImageSlider';
import Counter from './counter/Counter';
import Progressbar from './ProgressBar/ProgressBar';
import TooltipCode from './TooltipCode.js/TooltipCode';
import ElevatorCode from './ElevatorCode/ElevatorCode';

function MatchineCoding() {
  const [feature, setFeature] = useState(null);
  return (
    <div>
      <h1>Matchine Coding</h1>
      <div>
        <div onClick={() => setFeature('todoList')}>To Do List</div>
        <div onClick={() => setFeature('featureFlag')}>Feature Flag</div>
        <div onClick={() => setFeature('slider')}>Slider</div>
        <div onClick={() => setFeature('counter')}>Counter</div>
        <div onClick={() => setFeature('progress')}>Progress</div>
        <div onClick={() => setFeature('tooltip')}>Tooltip</div>
        <div onClick={() => setFeature('elevator')}>elevator</div>
      </div>
      {feature === 'todoList' && <ToDoList />}
      {feature === 'featureFlag' && <FeatureFlag />}
      {feature === 'slider' && <ImageSlider />}
      {feature === 'counter' && <Counter />}
      {feature === 'progress' && <Progressbar />}
      {feature === 'tooltip' && <TooltipCode />}
      {feature === 'elevator' && <ElevatorCode />}
    </div>
  );
}

export default MatchineCoding;
