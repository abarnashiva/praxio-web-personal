import React from "react";

interface FlexBoxProps {
  children: React.ReactNode;
  normal?: boolean;
  content?: boolean;
  footer?: boolean;
  logo?: boolean;
}

export default function FlexBox({
  children,
  normal,
  content,
  footer,
  logo,
}: FlexBoxProps) {
  const defaultFlex = normal
    ? "flex flex-wrap "
    : content
    ? "flex gap-2 items-center pt-3"
    : footer
    ? "flex flex-wrap lg:flex-nowrap xl:justify-between lg:gap-10 gap-14 p-7"
    : logo
    ? "my-auto flex justify-center pt-6 lg:pt-0 mx-auto lg:mx-0"
    : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 lg:px-7 justify-center";

  return (
    <>
      <div className={`${defaultFlex}`}>{children}</div>
    </>
  );
}
