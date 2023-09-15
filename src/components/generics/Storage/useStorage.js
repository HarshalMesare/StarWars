// useStorage.js
import { useState } from 'react';

export function useStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key) || initialValue;
  const [value, setValue] = useState(storedValue);

  const setStoredValue = (newValue) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  return [value, setStoredValue];
}
