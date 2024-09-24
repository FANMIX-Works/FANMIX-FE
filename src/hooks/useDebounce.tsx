import _ from 'lodash';
import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = _.debounce(() => {
      setDebouncedValue(value);
    }, delay);

    handler();

    return () => {
      handler.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // esLint로 인한 주석처리
  }, [value]);

  return debouncedValue.trim();
};
