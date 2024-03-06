"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import lodash from "lodash";
import Link from "next/link";
import HeroSwipe from "./components/HeroSwipe";

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
        <HeroSwipe>
          <div className="flex mt-6   container">
            <div className="flex text-white" key="1">
              <Link href="/">
                <p className="hover:underline font-semibold">Home</p>
              </Link>
              <p className="ml-2 mt-1 font-bold">
                <FaChevronRight />
              </p>
              <p className="ml-2  font-semibold">
                {lodash.capitalize(pageName)}
              </p>
            </div>
          </div>
        </HeroSwipe>
      ) : (
        <div className="p-0 m-0 "></div>
      )}
    </>
  );
};

export default Router;
