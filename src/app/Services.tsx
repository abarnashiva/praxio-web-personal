import React from "react";
import Card from "./common/Card";
function Services() {
  return (
    <section id="services" className="py-10 h-[50rem] ">
      <h2 className="text-center text-2xl mb-8">Our Services</h2>
      <div className="flex gap-5 justify-around">
        <Card
          header={"Software Development"}
          shortDescription={"Caption or Thumbnail"}
          content={
            "Get room to focus on strategic business growth by cutting on development costs and outplay your rivals."
          }
        />

        <Card
          header={"AI and Machine Learning"}
          shortDescription={"Caption or Thumbnail"}
          content={
            "Get room to focus on strategic business growth by cutting on development costs and outplay your rivals."
          }
        />
        <Card
          header={"IoT Application Development"}
          shortDescription={"Caption or Thumbnail"}
          content={
            "Get room to focus on strategic business growth by cutting on development costs and outplay your rivals."
          }
        />
        <Card
          header={"Enterprise Application Development"}
          shortDescription={"Caption or Thumbnail"}
          content={
            "Get room to focus on strategic business growth by cutting on development costs and outplay your rivals."
          }
        />
      </div>
    </section>
  );
}

export default Services;
