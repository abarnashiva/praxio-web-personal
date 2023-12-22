import React from "react";

interface FlexSocialProps {
  children: React.ReactNode;
}

export default function FlexSocial({ children }: FlexSocialProps) {
  return (
    <>
      <div className="flex flex-wrap gap-4">{children}</div>
    </>
  );
}
