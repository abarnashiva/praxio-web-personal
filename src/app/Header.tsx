import React from 'react';

function Header() {
  return (
    <header className="flex justify-between py-6 px-7 bg-neutral-50 text-neutral-900 shadow-md">
      <img src="/praxio.svg" alt="Image Description" className="w-32" />
      <nav>
        <ul className="flex space-x-8 mt-1">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products and Solutions</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
