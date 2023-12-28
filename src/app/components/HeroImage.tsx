import React from "react";

interface HeroImageProps {
  source: string;
}

export default function HeroImage({ source }: HeroImageProps) {
  return (
    <>
      <div className="lg:px-7">
        <img src={source} className="object-fit w-full my-4" />
      </div>
    </>
  );
}
