import React from 'react';

const Button = ({ label, onClick, customStyles = {} }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-4 py-2 rounded-lg border-2 border-black bg-black text-white
                   hover:bg-white hover:text-black transition-all duration-700"
        style={{ ...customStyles }}
      >
        Sign in
        {label}
      </button>
    </div>
  );
}

export default Button;


