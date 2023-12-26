import React from "react";
import Card from "../common/Card";
import Heading from "../components/Heading";
import ServiceImage from "../components/ServiceImage";
import Paragraph from "../components/Paragraph";
import FlexBox from "../components/FlexBox";
function Services() {
  return (
    <section id="services">
      <Heading center margin>
        Tailored Services, Tangible Results
      </Heading>
      <FlexBox>
        <Card small
          imgSrc={
            <ServiceImage source={"./images/hardware.jpg"}></ServiceImage>
          }
          header={"Custom Hardware Design & Prototyping"}
          content={
            <Paragraph>
              It empowers businesses and industries to innovate and find unique
              solutions to their challenges. It combines engineering expertise
              with creativity and problem-solving to create tailored hardware
              solutions.
            </Paragraph>
          }
        />

        <Card small
          imgSrc={
            <ServiceImage source={"./images/software.jpg"}></ServiceImage>
          }
          header={"Custom Software Development & Integration"}
          content={
            <Paragraph>
              It refer to the process of creating and seamlessly combining
              specialized software solutions to meet the unique needs of a
              business or organization. This tailored approach enables
              businesses to enhance their operations, improve efficiency.
            </Paragraph>
          }
        />
        <Card small
          imgSrc={
            <ServiceImage source={"./images/testing.jpg"}></ServiceImage>
          }
          header={"Testing & Quality Assurance"}
          content={
            <Paragraph>
              They ensure that software products meet the highest standards of
              performance, reliability, and user satisfaction. Testing involves
              systematically evaluating software to identify defects or issues,
              while QA focuses on establishing and standards to deliver a
              quality product.
            </Paragraph>
          }
        />
      </FlexBox>
    </section>
  );
}

export default Services;
