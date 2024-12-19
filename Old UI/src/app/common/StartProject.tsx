import React from "react";
import { Button } from "./Button";
import Link from "next/link";

export default function StartProject() {
  return (
    <div className="my-4">
      <Link href="/contact">
        <Button text={"Start Your Project"}></Button>
      </Link>
    </div>
  );
}
