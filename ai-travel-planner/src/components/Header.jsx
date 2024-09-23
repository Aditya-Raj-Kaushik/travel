import React from 'react';
import Button from './Button';
import logo from '../assets/PlanMyYatra.png'; 

function Header() {
  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-5'>
      <img src={logo}  className="h-10" /> 
      <div>
        <Button />
      </div>
    </div>
  );
}

export default Header;

