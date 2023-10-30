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
    <header className=" scroll-smooth flex justify-between py-6 px-6 bg-neutral-50 text-neutral-900 shadow-md">
      <img src="/praxio.svg" alt="Image Description" className="w-32" />
      <nav>
        {innerWidth < 630 && !click && <div className='text-red-600 right-0  w-8 text-center cursor-pointertext-base font-medium rounded'
          onClick={()=>setClick(true)}>
          {<FaBars/>}</div>}
      <ul className={`${innerWidth < 630 && click ?`flex fixed p-4 w-40 inset-y-0 right-0 bg-neutral-50 z-50 flex-col h-full overflow-hidden space-y-8 `:
        innerWidth < 630 ? `hidden` :`flex space-x-4 md:space-x-8 `} `}>
        <li className='navList px-7 md:px-3'><a href="#home" onClick={()=>setClick(false)}>Home</a></li>
        <hr/>
        <li className='navList px-7 md:px-3'><a href="#about" onClick={()=>setClick(false)}>About Us</a></li>
        <hr/>
        <li className='navList px-7 md:px-3'><a href="#products" onClick={()=>setClick(false)}>Service</a></li>
        <hr/>
        <li className='navList px-7 md:px-3'><a href="#career" onClick={()=>setClick(false)}>Career</a></li>
        <hr/>
        <li className='navList px-7 md:px-3'><a href="#contact" onClick={()=>setClick(false)}>Contact</a></li>
        <hr/>
        {innerWidth < 630 && 
        <button className="group flex items-center shadow-sm shadow-neutral-500 px-5 py-3 bg-red-600 hover:bg-red-500
          text-white transition-all" 
          onClick={()=>setClick(false)} >
      <span className="group-hover:-translate-x-4 transition-transform rotate-180 w-4 mx-4">
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
