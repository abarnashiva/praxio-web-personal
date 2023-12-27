"use client";
import React, { useEffect, useState } from "react";
import { Arrow } from "./common";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";

function Header() {
  const [click, setClick] = useState(false);
  const [smallScreen, setSmallScreen] = useState(true);

  const navigation = [
    {
      url: "/home",
      label: "Home",
    },
    {
      url: "/about",
      label: "About Us",
    },
    {
      label: "Services",
      children: [
        {
          name: "Custom Hardware Design & Prototyping",
          url: "/service/hardware-design",
        },
        {
          name: "Custom Software Development & Integration",
          url: "/service/software-development",
        },
        {
          name: "Testing & Quality Assurance",
          url: "/service/testing-quality",
        },
        {
          name: "Deployment & Scalability",
          url: "/service/deployment",
        },
      ],
    },
    {
      label: "Products & Solutions",
      children: [
        {
          name: "Visuals Intelligence Platform",
          url: "/product/visual-intelligence",
        },
        {
          name: "IoT Management Platform",
          url: "/product/iot-development",
        },
        {
          name: "Smart City Solutions",
          url: "/product/smart-city",
        },
        {
          name: "Rapid Prototyping",
          url: "/products/rapid-prototyping",
        },
      ],
    },
    {
      url: "/contact",
      label: "Contact",
    },

    {
      url: "/support",
      label: "Support",
    },
  ];

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 800);
  };
  useEffect(() => {
    handleResize();
  }, [window.addEventListener("resize", handleResize)]);

  return (
    <header
      className={` scroll-smooth ${
        !smallScreen ? "flex" : smallScreen && !click ? "flex" : ""
      } justify-between py-6 overFlow-auto px-6 bg-neutral-50 text-neutral-900 shadow-md`}
    >
      <Link href="/">
        <img src="/praxio.svg" alt="Image Description" className="w-32" />
      </Link>
      <nav>
        {smallScreen && !click && (
          <div
            className="text-red-600 right-0 w-8 text-center cursor-pointer text-2xl font-medium rounded"
            onClick={() => setClick(true)}
          >
            {<FaBars />}
          </div>
        )}
        <ul
          className={`${
            smallScreen && click
              ? `flex py-4 w-full h-auto  inset-y-0 right-0 bg-neutral-50 z-50 flex-col  overflow-scroll text-base space-y-8 `
              : smallScreen
              ? "hidden"
              : "flex space-x-8 sm:space-x-4"
          }  `}
        >
          {navigation.map((item, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [show, setShow] = useState(false);
            return (
              <>
                <li
                  className="group navList cursor-pointer justify-between h-auto  overflow-scroll items-center px-3 md:px-1 sm:px-0.5 transition-all truncate"
                  key={index}
                  onClick={() => setShow(!show)}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                >
                  <div className="flex justify-between">
                    <a className={`h-full`} href={item.url && item.url}>
                      {item.label}
                    </a>
                    {item.children && (
                      <span
                        className={`color-red-600 group-hover:translate-y-1 transition-transform ${
                          show ? `-rotate-90` : `rotate-90`
                        } w-4 mx-4 scale-75`}
                      >
                        <Arrow fill="#ED1F24CC" />
                      </span>
                    )}
                  </div>
                  {show && item.children && (
                    <div
                      className={` mt-4  ${
                        !smallScreen &&
                        "absolute top-8 z-10 bg-slate-50 p-4 rounded-lg "
                      } flex flex-col gap-4 ${smallScreen && "w-full"} `}
                      onMouseLeave={() => setShow(false)}
                    >
                      {item.children.map((child, ind) => {
                        return (
                          <div
                            className="  navList flex py-2 transition-all"
                            key={ind}
                          >
                            <a className=" truncate" href={child.url}>
                              {child.name}
                            </a>
                            <span className="w-4 mx-4 scale-75 ">
                              <Arrow fill="#ED1F24CC" />
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </li>
                <hr />
              </>
            );
          })}
          {smallScreen && (
            <button
              className="group flex items-center shadow-sm shadow-neutral-500 px-5 py-3 bg-red-600 hover:bg-red-500 text-white transition-all"
              onClick={() => setClick(false)}
            >
              <span className=" group-hover:-translate-x-4 transition-transform rotate-180 w-4 mx-4 ">
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
