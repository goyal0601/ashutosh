import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { saveValues } from './Utils';

function NewListComponent() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const saveValues1 = saveValues();
    saveValues1.setItem('wdwedwedwed', 2);
    saveValues1.setItem('wdweded', 3);
  }, []);

  return <div onClick={() => navigate('/er/2')}>{data}wrefrefr</div>;
}

export default NewListComponent;
