import {useEffect, useRef} from 'react';

export const useMount = (callback: () => void | Promise<void>) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      callback();
    }
  }, [callback]);
};
