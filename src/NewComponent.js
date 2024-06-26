import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { saveValues } from './Utils';

function NewComponent({}) {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    const saveValues1 = saveValues();

    const newData = saveValues1.getItem(params.id);

    if (newData) setData(newData);
  }, []);

  return <div>{data}</div>;
}

export default NewComponent;
