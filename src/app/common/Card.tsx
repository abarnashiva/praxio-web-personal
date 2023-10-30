import React from "react";
import { Arrow } from ".";
interface CardProps {
  header?: React.ReactNode;
  shortDescription?: string;
  content?: React.ReactNode;
}

export default function Card({ header, shortDescription, content }: CardProps) {
  return (
    <div>
      <div className="relative mx-auto card max-w-full md:max-w-[22em]  min-h-[8rem] p-8 bg-white shadow-md transition-all duration-350 ease-in-out cursor-pointer hover:shadow-lg">
        <div className="content smax-w-[18em]">
          <div className={`group flex items-center transition-all `}>
            <div className="header">{header}</div>
            <div className="icon ">
              <Arrow fill="#ed1f24cc" />
            </div>
          </div>

          <h6 className="text-primary font-semibold uppercase text-xs tracking-wider mb-0">
            {shortDescription}
          </h6>
          <div className="hover_content overflow-hidden max-h-0 duration-500  transform translate-y-[1em] transition-all ease">
            <div className="mt-4 text-gray-700 leading-relaxed">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
