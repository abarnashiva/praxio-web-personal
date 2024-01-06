"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import lodash from "lodash";

const inter = Inter({ subsets: ["latin"] });
export default function Title() {
  const [pageTitle, setPageTitle] = useState<string>();
  const pathname = usePathname();
  const isClient = typeof window === `object` ? true : false;

  const pageName = React.useMemo(() => {
    const firstSegment = pathname.split("/")?.[1];
    if (!firstSegment) return "";

    return firstSegment.toLowerCase();
  }, [pathname]);

  return pageName !== "home" && pageName !== "" ? (
    <title>{`Praxio - ${lodash.capitalize(pageName)}`}</title>
  ) : (
    <title>Praxio</title>
  );
}
