import React, { useState } from "react";

const Dropdown = () => {
  const [country, setCountry] = useState('China');

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  }

  return (
    <select 
      name="countries"
      value={country}
      onChange={handleOnChange}>
      <option value="United States">United States</option>
      <option value="Russia">Russia</option>
      <option value="China">China</option>
    </select>
  );
};

export default Dropdown;
