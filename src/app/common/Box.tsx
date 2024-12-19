"use client";
import { SecondaryButton } from "../common/Button";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const contents = [
  {
    words: "Have a project in mind?",
    BtnName: "Let's Discuss",
  },
  {
    words: "Excited about a new project?",
    BtnName: "Let's Start",
  },
  {
    words: "Ready to take the next step?",
    BtnName: "Contact Us",
  },
  {
    words: "Have a question or idea?",
    BtnName: "Let's Talk",
  },
];


export default function CenteredBoxWithButton() {

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:w-6/12 bg-primary p-4 mx-auto my-12 rounded-md">
      <div className="justify-center p-4 text-center border border-white">
        <p className="text-white font-bold lg:text-4xl md:text-2xl text-xl">
          {contents[currentContentIndex].words}
        </p>
        <div className="lg:mt-5 flex justify-center">
          <Link href={"/contact"}>
            <SecondaryButton
              text={`${contents[currentContentIndex].BtnName}`}
            ></SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};