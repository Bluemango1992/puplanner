'use client'

import React, { useState } from 'react';

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState('login');

  const buttons = [
    { id: 'login', label: 'Login' },
    { id: 'signup', label: 'Sign Up' }
  ];

  return (
    <div className="flex flex-1 items-center bg-gray-100 rounded-lg p-1">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => setActiveButton(button.id)}
          className={`px-4 py-2 w-full font-medium rounded-lg transition-all duration-300 ${
            activeButton === button.id
              ? 'text-black bg-white shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;