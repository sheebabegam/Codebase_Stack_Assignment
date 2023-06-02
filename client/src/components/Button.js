import React from 'react';

const Button = ({ label, type }) => {
  return (
    <button type={type} className="btn btn-primary">
      {label}
    </button>
  );
};

export default Button;
