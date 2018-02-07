import React from 'react';

const Select = ({ value, options, handleChange, children }) =>
  <div>
    {children}
    :&nbsp;
    <label>
      <select value={value} onChange={e => handleChange(e.target.value)}>
        {options.map(option =>
          <option key={option.value} value={option.value}>{option.label}</option>
        )}
      </select>
    </label>
  </div>

export default Select;