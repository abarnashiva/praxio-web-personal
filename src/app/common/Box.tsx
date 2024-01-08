import React from "react";
import { SecondaryButton } from "../common/Button";
import Link from "next/link";

export default function CenteredBoxWithButton() {

  return (
    <div className="md:w-6/12 bg-primary p-4 mx-auto my-12 rounded-md">
      <div className="justify-center p-4 text-center border border-white">
        <p className="text-white font-bold lg:text-4xl md:text-2xl text-xl">
          Have a project in mind?
        </p>
        <div className="lg:mt-5 flex justify-center">
          <Link href={"/contact"}>
            <SecondaryButton text={"Lets Discuss"}></SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};