import { useState, useCallback } from 'react';

export const useMainSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback((newTerm: string) => {
    setSearchTerm(newTerm);
  }, []);

  return { searchTerm, handleSearch };
};
