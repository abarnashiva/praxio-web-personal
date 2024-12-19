import React from "react";
import { Arrow } from ".";
interface CardProps {
  header?: React.ReactNode;
  imgSrc?: React.ReactNode;
  content?: React.ReactNode;
}

export default function Card({ header, imgSrc, content }: CardProps) {
  return (
    <div className="h-full">
      <div
        className={`relative card  bg-white shadow-md h-full transition-transform duration-500 ease-linear cursor-pointer hover:shadow-lg rounded-md`}
      >
        <div>
          <div className={`transition-all`}>
            <div className="m-auto pt-5">{imgSrc}</div>
            <div className="flex my-4 h-auto px-5 items-center">
              <div className="font-semibold pt-4">{header}</div>
              <div className="icon w-[1rem] ms-3 pt-4">
                <Arrow fill="#7DBC44" />
              </div>
            </div>
          </div>
          <div className="text-gray-700 px-5 pb-5">{content}</div>
        </div>
      </div>
    </div>
  );
}
