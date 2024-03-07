import React from "react";

interface FlexSocialProps {
  children: React.ReactNode;
  centerAlign?: boolean;
}

export default function FlexSocial({ children, centerAlign }: FlexSocialProps) {
  const centerAligning = centerAlign ? "justify-center pt-2" : "";

  return (
    <>
      <div className={`flex flex-wrap gap-4 ${centerAligning}`}>{children}</div>
    </>
  );
}
