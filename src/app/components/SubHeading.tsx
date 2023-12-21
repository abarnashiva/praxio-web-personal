import React from "react";

interface SubheadingProps {
  children: React.ReactNode;
}

export default function SubHeading({ children }: SubheadingProps) {
  return <h2 className="text-primary py-6 text-2xl font-semibold">{children}</h2>;
}
