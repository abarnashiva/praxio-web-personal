'use client';
import React, { useState } from 'react';
import { Arrow } from './common';
import { FaBars } from "react-icons/fa6";


function Header() {
  const [click, setClick] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  React.useEffect(() => {
    function handleResize() {
setInnerWidth(window.innerWidth)
}
window.addEventListener('resize', handleResize)
  }
  )
  
  return (
    <header className=" scroll-smooth flex justify-between py-6 px-7 bg-neutral-50 text-neutral-900 shadow-md">
      <img src="/praxio.svg" alt="Image Description" className="w-32" />
      <nav>
        {innerWidth < 630 && !click && <div className='text-red-600 right-0 p-2 w-8 hover:bg-gray-300 text-base font-medium rounded' onClick={()=>setClick(true)}>{<FaBars/>}</div>}
      <ul className={`${innerWidth < 630 && click ? `flex fixed p-4 w-40 inset-y-0 right-0 bg-neutral-50 z-50 flex-col  h-screen space-y-4 mt-2 `: innerWidth < 630 ? `hidden` :`flex space-x-4 md:space-x-8 `} `}>
        <li ><a href="#home">Home</a></li>
        <hr/>
        <li><a href="#about">About Us</a></li>
        <hr/>
        <li><a href="#products">Service</a></li>
        <hr/>
        <li><a href="#career">Career</a></li>
        <hr/>
        <li><a href="#contact">Contact</a></li>
        <hr/>
        {innerWidth < 630 && <button className="group flex items-center shadow-sm shadow-neutral-500 px-5 py-3 bg-red-600 hover:bg-red-500 text-white transition-all" onClick={()=>setClick(false)} >
      <span className="group-hover:translate-x-4 transition-transform rotate-180 w-4 mx-4">
        <Arrow />
      </span>
      <span  >Back</span>
    </button>}
      </ul>
      
      </nav>
    </header>
  );
}

export default Header;
