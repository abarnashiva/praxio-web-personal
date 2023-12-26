import React from "react";

interface FlexBoxProps {
  children: React.ReactNode;
}

export default function FlexBox({ children }: FlexBoxProps) {
  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap gap-6 px-7">{children}</div>
    </>
  );
}
