import React from "react";

interface FlexBoxProps {
  children: React.ReactNode;
  normal?: boolean;
  content?: boolean;
  footer?: boolean;
  logo?: boolean;
  contact?: boolean;
  customClass?: string;
}

export default function FlexBox({
  children,
  normal,
  content,
  footer,
  logo,
  contact,
  customClass,
}: FlexBoxProps) {
  const defaultFlex = normal
    ? "flex flex-wrap"
    : content
    ? "flex gap-2 pt-3"
    : footer
    ? "flex flex-wrap justify-start lg:flex-nowrap xl:justify-around lg:gap-10 gap-14"
    : logo
    ? "my-auto flex justify-center md:justify-start pt-6 lg:pt-0 mx-auto lg:mx-0"
    : contact
    ? "flex gap-2"
    : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center";

  return <div className={` ${customClass} ${defaultFlex}`}>{children}</div>;
}
