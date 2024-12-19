import React from "react";

interface FutureImageProps {
  source: string;
}

export default function FutureImage({ source }: FutureImageProps) {
  return (
    <>
      <div className="w-full xl:w-7/12 flex justify-center">
        <img
          src={source}
          className="object-cover mx-auto bg-gray-100 py-16 lg:py-20 px-8 rounded-full"
        />
      </div>
    </>
  );
}
