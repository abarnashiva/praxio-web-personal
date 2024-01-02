"use client";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Router = () => {
  const [currentPage, setcurrentPage] = useState<string>("Home");
  const isClient = typeof window === `object` ? true : false;

  useEffect(() => {
    setcurrentPage(
      `${
        window.location.pathname.split("/")[1].charAt(0).toUpperCase() +
        window.location.pathname.split("/")[1].slice(1)
      }`
    );
  }, [isClient]);

  return (
    <>
      {currentPage !== "Home" ? (
        <div className="flex mt-6 pt-6 lg:pl-0 pl-6 container">
          <div className="flex" key="1">
            <p className="hover:underline font-semibold">
              <a href="/home">Home</a>
            </p>
            <p className="ml-2 mt-1.5 font-bold">
              <FaChevronRight />
            </p>
            <p className="ml-2  font-semibold">{currentPage}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Router;
