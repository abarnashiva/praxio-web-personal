"use client";
import React from "react";
import { SecondaryButton } from "../common/Button";
import { useRouter } from "next/navigation";

export default function CenteredBoxWithButton() {
  const router = useRouter();

  return (
    <div className="md:w-6/12 bg-primary p-4 mx-auto my-12 rounded-md">
      <div className="justify-center p-4 text-center border border-white">
        <p className="text-white font-bold md:text-4xl">
          Have a project in mind?
        </p>
        <div className="lg:mt-5 flex justify-center">
          <SecondaryButton
            text={"Lets Discuss"}
            onClick={() => router.push(`/contact`)}
          ></SecondaryButton>
        </div>
      </div>
    </div>
  );
};