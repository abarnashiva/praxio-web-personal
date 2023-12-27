"use client";
import React from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export default function StartProject() {
  const router = useRouter();

  return (
    <>
      <Button
        text={"Start Your Project"}
        onClick={() => router.push(`/contact`)}
      ></Button>
    </>
  );
}
