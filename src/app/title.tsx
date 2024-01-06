"use client";
import { Inter } from "next/font/google";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Title() {
  const [pageTitle, setPageTitle] = useState("Praxio");

  const isClient = typeof window === `object` ? true : false;

  React.useEffect(() => {
    const setPageTitleBasedOnURL = () => {
      const currentUrl =
        window.location.pathname.split("/")[1].charAt(0).toUpperCase() +
        window.location.pathname.split("/")[1].slice(1);

      const newPageTitle =
        currentUrl === "" ? "Praxio " : `${currentUrl} - Praxio`;
      setPageTitle(newPageTitle);
    };
    setPageTitleBasedOnURL();
    window.addEventListener("popstate", setPageTitleBasedOnURL);
    return () => {
      window.removeEventListener("popstate", setPageTitleBasedOnURL);
    };
  }, [isClient]);
  return <title>{pageTitle}</title>;
}
