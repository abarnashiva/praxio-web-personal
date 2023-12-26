import React from "react";

interface IconsProps {
  children: React.ReactNode;
  white?: boolean;
  small?: boolean;
}

export default function Icons({ children, white, small }: IconsProps) {
  const whiteChange = white ? "text-white" : "";
  const smallAlign = small ? "text-xl mt-5" : "";

  return (
    <>
      <div className={`text-2xl text-gray-700 py-4 ${whiteChange} ${smallAlign}`}>{children}</div>
    </>
  );
}
