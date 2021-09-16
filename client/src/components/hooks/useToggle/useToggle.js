import  { useState } from "react"; 

export default function useToggle(initialState = false) {
    const [value, setValue] = useState(initialState);
  
    const toggle = (value) => setValue(currentValue =>
      typeof value === 'boolean' ? value: !currentValue);
  
    return [value, toggle];
    }