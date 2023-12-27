import React from "react";

interface FlexBoxProps {
  children: React.ReactNode;
  normal?: boolean;
  content?: boolean;
  footer?: boolean;
  logo?: boolean;
}

export default function FlexBox({ children, normal, content, footer, logo }: FlexBoxProps) {
const defaultFlex = normal
  ? "flex flex-wrap"
  : content
  ? "flex gap-2 items-center pt-3"
  : footer
  ? "flex flex-wrap lg:flex-nowrap xl:gap-28 lg:gap-10 md:gap-20 gap-12 p-7"
  : logo
  ? "my-auto flex justify-center pt-6 lg:pt-0 mx-auto lg:mx-0"
  : "flex lg:flex-nowrap flex-wrap gap-10 px-7";

  return (
    <>
      <div className={`${defaultFlex}`}>{children}</div>
    </>
  );
}
