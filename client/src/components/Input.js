import React from 'react';

const Input = ({ label, type, id, name, placeholder, required, defaultValue }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        id={id}
        name={name}
        className="form-control"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
