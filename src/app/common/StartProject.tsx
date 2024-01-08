import React from "react";
import { Button } from "./Button";
import Link from "next/link";

export default function StartProject() {
  return (
    <>
      <Link href="/contact">
        <Button text={"Start Your Project"}></Button>
      </Link>
    </>
  );
}
