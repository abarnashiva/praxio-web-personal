import React from "react";
import Card from "../common/Card";

export default function Products() {
  return (
    <section id="products" className="py-10">
      <h2 className="text-center text-2xl mb-8 ">Our Products and Solutions</h2>
      <div className="flex gap-6 px-7">
        <Card
          imgSrc={<div className="w-full h-64 bg-neutral-200">image</div>}
          header={"Title of the Above Image"}
          content={
            <ul className="list-disc list-inside h-20">
              <li className="">Hardware Platforms</li>
              <li className="">Software Algorithms & Tools</li>
              <li className="">Deployment Scenarios</li>
            </ul>
          }
        />
        <Card
          imgSrc={<div className="w-full h-64 bg-neutral-200">image</div>}
          header={"Title of the Above Image"}
          content={
            <ul className="list-disc list-inside h-20">
              <li className="">IoT Hardware Modules</li>
              <li className="">IoT Software & Platform Integration</li>
            </ul>
          }
        />
        <Card
          imgSrc={<div className="w-full h-64 bg-neutral-200">image</div>}
          header={"Title of the Above Image"}
          content={
            <ul className="list-disc list-inside h-20">
              <li className="">Hardware Modules for Infrastructure</li>
              <li className="">Software for Urban Management & Analysis</li>
            </ul>
          }
        />
      </div>
    </section>
  );
}