"use client";
import React, { useEffect, useState } from "react";
import { Arrow } from "./common";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";

function Header() {
  const [click, setClick] = useState(false);
  const [smallScreen, setSmallScreen] = useState(true);

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 500);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className=" scroll-smooth flex justify-between py-6 px-6 bg-neutral-50 text-neutral-900 shadow-md">
      <Link href="/">
        <img src="/praxio.svg" alt="Image Description" className="w-32" />
      </Link>
      <nav>
        {smallScreen ? (
          <div
            className="text-red-600 right-0  w-8 text-center cursor-pointer text-2xl font-medium rounded"
            onClick={() => setClick(true)}
          >
            {<FaBars />}
          </div>
        ) : (
          ""
        )}
        <ul
          className={`${
            smallScreen && click
              ? `flex fixed p-4 w-full inset-y-0 right-0 bg-neutral-50 z-50 flex-col h-auto text-base overflow-hidden space-y-8 `
              : smallScreen
              ? "hidden"
              : "flex space-x-8 sm:space-x-4"
          }  `}
        >
          <li className="navList px-3 md:px-1 sm:px-0.5">
            <a href="/home" onClick={() => setClick(false)}>
              Home
            </a>
          </li>
          <hr />
          <li className="navList px-3 md:px-1 sm:px-0.5">
            <a href="/about" onClick={() => setClick(false)}>
              About Us
            </a>
          </li>
          <hr />
          <li className="navList px-3 md:px-1 sm:px-0.5">
            <a href="/about" onClick={() => setClick(false)}>
              Products & Solutions
            </a>
          </li>
          <hr />
          <li className="navList px-3 md:px-1 sm:px0.5">
            <a href="/service" onClick={() => setClick(false)}>
              Services
            </a>
          </li>
          <hr />
          <li className="navList px-3 md:px-1 sm:px-0.5">
            <a href="#career" onClick={() => setClick(false)}>
              Contact
            </a>
          </li>
          <hr />
          <li className="navList px-3 md:px-1 sm:px-0.5">
            <a href="#contact" onClick={() => setClick(false)}>
              Support
            </a>
          </li>
          <hr />
          {smallScreen && (
            <button
              className="group flex items-center shadow-sm shadow-neutral-500 px-5 py-3 bg-red-600 hover:bg-red-500
          text-white transition-all"
              onClick={() => setClick(false)}
            >
              <span className="group-hover:-translate-x-4 transition-transform rotate-180 w-4 mx-4">
                <Arrow />
              </span>
              <span>Back</span>
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
