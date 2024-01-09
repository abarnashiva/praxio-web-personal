"use client";
import React, { useEffect, useState } from "react";
import { Arrow } from "./common";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";

function Header() {
  const [click, setClick] = useState(false);
  const [smallScreen, setSmallScreen] = useState<boolean>(true);
  const isClient = typeof window === `object` ? true : false;

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 900);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [isClient]);

  const navigation = [
    {
      url: "/",
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
          url: "/services/hardware-design",
        },
        {
          name: "Custom Software Development & Integration",
          url: "/services/software-development",
        },
        {
          name: "Testing & Quality Assurance",
          url: "/services/testing-quality",
        },
        {
          name: "Deployment & Scalability",
          url: "/services/deployment",
        },
      ],
    },
    {
      label: "Products & Solutions",
      children: [
        {
          name: "Visuals Intelligence Platform",
          url: "/products/visual-intelligence",
        },
        {
          name: "IoT Management Platform",
          url: "/products/iot-development",
        },
        {
          name: "Smart City Solutions",
          url: "/products/smart-city",
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

  return (
    <div className="w-full bg-neutral-50 shadow-md">
      <header
        className={` scroll-smooth ${
          !smallScreen
            ? "flex "
            : smallScreen && !click
            ? "flex w-full  "
            : "fixed w-full h-full overflow-auto bg-neutral-50 z-10  "
        } justify-between overFlow-auto p-6 bg-neutral-50 text-neutral-900 container`}
      >
        <div className={`flex ${smallScreen && `w-full`} justify-between`}>
          <Link className="w-32 " href="/">
            <img src="/praxio.svg" alt="Image Description" className="w-full" />
          </Link>
          {smallScreen && (
            <div
              className="text-red-600 right-0 w-8 text-center cursor-pointer text-2xl font-medium rounded"
              onClick={() => setClick(!click)}
            >
              {click ? <FaXmark /> : <FaBars />}
            </div>
          )}
        </div>
        <nav>
          <ul
            className={`font-semibold ${
              smallScreen && click
                ? ` mt-4 flex pt-4 w-full h-auto  inset-y-0 right-0 bg-neutral-50 z-50 flex-col  overflow-auto text-base  space-y-8 `
                : smallScreen
                ? "hidden"
                : "flex xl:space-x-12 space-x-4"
            }  `}
          >
            {navigation.map((item, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [show, setShow] = useState(false);
              return (
                <>
                  <hr />

                  <li
                    className=" navList cursor-pointer justify-between h-auto overflow-scroll hover:text-red-600 items-center px-3 md:px-1 sm:px-0.5 transition-all truncate"
                    key={index}
                    onClick={() => setShow(!show)}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                  >
                    <div className="flex justify-between">
                      {item.url ? (
                        <Link
                          className={`h-full`}
                          href={`${item.url && item.url}`}
                          onClick={() => setClick(!click)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <p>{item.label}</p>
                      )}
                      {item.children && (
                        <span
                          className={`color-red-600 group-hover:translate-y-1 transition-transform ${
                            show ? `-rotate-90` : `rotate-90`
                          } w-4 mx-1 scale-50`}
                        >
                          <Arrow fill="#ED1F24CC" />
                        </span>
                      )}
                    </div>
                    {show && item.children && (
                      <div
                        className={` mt-4   ${
                          !smallScreen &&
                          "absolute top-8 z-10 shadow-slate-400 shadow-lg bg-slate-50 rounded-lg "
                        } flex flex-col gap-4 ${smallScreen && "w-full"} `}
                        onMouseLeave={() => setShow(false)}
                        onClick={() => setClick(!click)}
                      >
                        {item.children.map((child, ind) => {
                          return (
                            <div
                              className="  navList flex group px-4 py-2 text-gray-700 hover:text-red-600  transition-all rounded-lg"
                              key={ind}
                            >
                              <Link
                                className="  truncate"
                                href={`${child.url}`}
                              >
                                {child.name}
                              </Link>
                              <span className="w-4  mx-4 opacity-0 scale-75 group-hover:opacity-100 ">
                                <Arrow fill="#ED1F24CC" />
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
