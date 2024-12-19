import React from "react";

interface ServiceImageProps {
  source: string;
}

export default function ServiceImage({ source }: ServiceImageProps) {
  return (
    <>
      <div>
        <img src={source} className="w-full" />
      </div>
    </>
  );
}
