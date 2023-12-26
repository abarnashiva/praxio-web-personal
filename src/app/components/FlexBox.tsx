import React from "react";

interface FlexBoxProps {
  children: React.ReactNode;
  normal?: boolean;
}

export default function FlexBox({ children, normal }: FlexBoxProps) {
  const defaultFlex = normal ? "flex flex-wrap" : "flex lg:flex-nowrap flex-wrap gap-10 px-7";

  return (
    <>
      <div className={`${defaultFlex}`}>{children}</div>
    </>
  );
}
