import { useState } from 'react';
import ToDoList from './toDoList/ToDoList';
import FeatureFlag from './featureFlag/FeatureFlag';
import ImageSlider from './imageSlider/ImageSlider';
import Counter from './counter/Counter';

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
      </div>
      {feature === 'todoList' && <ToDoList />}
      {feature === 'featureFlag' && <FeatureFlag />}
      {feature === 'slider' && <ImageSlider />}
      {feature === 'counter' && <Counter />}
    </div>
  );
}

export default MatchineCoding;
