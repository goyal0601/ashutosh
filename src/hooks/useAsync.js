import { useCallback, useEffect, useState } from 'react';

export const useAsync = (asyncFn, immediate = false) => {
  const [states, setState] = useState({
    value: null,
    status: 'idle',
    error: null
  });

  const refetch = useCallback(() => {
    setState({ value: null, error: null, status: 'pending' });

    asyncFn()
      .then(data => {
        setState({ value: data, error: null, status: 'success' });
      })
      .catch(error => {
        setState({ value: null, error, status: 'error' });
      });
  }, [asyncFn]);

  useEffect(() => {
    if (immediate) refetch();
  }, [refetch, immediate]);

  const {value, status, error} = states;

  return [value, status, error, refetch];
};
