"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import lodash from "lodash";

const Router = () => {
  const pathname = usePathname();
  const [currentPage, setcurrentPage] = useState<string>("");
  const isClient = useMemo(
    () => (typeof window === `object` ? true : false),
    []
  );

  const pageName = useMemo(() => {
    const firstSegment = pathname.split("/")?.[1];
    if (!firstSegment) return "";

    return firstSegment.toLowerCase();
  }, [pathname]);

  return (
    <>
      {pageName !== "home" && pageName !== "" ? (
        <div className="flex mt-6 pt-6 lg:pl-0 pl-6 container">
          <div className="flex" key="1">
            <p className="hover:underline font-semibold">
              <a href="/home">Home</a>
            </p>
            <p className="ml-2 mt-1.5 font-bold">
              <FaChevronRight />
            </p>
            <p className="ml-2  font-semibold">{lodash.capitalize(pageName)}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Router;
