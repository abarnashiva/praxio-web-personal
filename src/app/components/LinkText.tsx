import Link from "next/link";
import React from "react";

interface LinkTextProps {
  children: React.ReactNode;
}

export default function LinkText({ children }: LinkTextProps) {
  return (
    <>
      <Link className="contents text-primary font-semibold cursor-pointer" href={"/about"}>
        {children}
      </Link>
    </>
  );
}
