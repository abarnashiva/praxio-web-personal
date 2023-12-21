import React from "react";
import Card from "../common/Card";
function Services() {
  return (
    <section id="services" className="py-10  ">
      <h2 className="text-center text-2xl mb-8 ">Our Services</h2>
      <div className="flex gap-3 md:gap-5 px-7 ">
        <Card
          header={"Custom Hardware Design & Prototyping"}
          content={
            <div className="h-36">
              It empowers businesses and industries to innovate and find unique
              solutions to their challenges. It combines engineering expertise
              with creativity and problem-solving to create tailored hardware
              solutions.
            </div>
          }
        />

        <Card
          header={"Custom Software Development & Integration"}
          content={
            <div className="h-36">
              It refer to the process of creating and seamlessly combining
              specialized software solutions to meet the unique needs of a
              business or organization. This tailored approach enables
              businesses to enhance their operations, improve efficiency.
            </div>
          }
        />
        <Card
          header={"Testing & Quality Assurance"}
          content={
            <div className="h-36">
              They ensure that software products meet the highest standards of
              performance, reliability, and user satisfaction. Testing involves
              systematically evaluating software to identify defects or issues,
              while QA focuses on establishing and standards to deliver a
              quality product.
            </div>
          }
        />
      </div>
    </section>
  );
}

export default Services;
