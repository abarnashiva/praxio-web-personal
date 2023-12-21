import React from "react";
import { SecondaryButton } from "../common/Button";

export default function CenteredBoxWithButton() {
  return (
    <div className="md:w-6/12 bg-primary p-4 mx-auto my-12 rounded-md">
      <div className="justify-center p-6 text-center border border-white">
        <p className="text-white font-bold md:text-4xl">
          Have a project in mind?
        </p>
        <div className="mt-9 flex justify-center">
          <SecondaryButton text={"Lets Discuss"}></SecondaryButton>
        </div>
      </div>
    </div>
  );
};