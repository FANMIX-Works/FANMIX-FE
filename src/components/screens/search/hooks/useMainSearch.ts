import { useState, useCallback } from 'react';

const useMainSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return { searchTerm, handleSearch };
};

export default useMainSearch;
