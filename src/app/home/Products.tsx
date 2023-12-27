import React from "react";
import Card from "../common/Card";
import Heading from "../components/Heading";
import FlexBox from "../components/FlexBox";
import List from "../components/List";
import ProductImage from "../components/ProductImage";

const product1 = [
  { key: 1, content: "Hardware Platforms" },
  { key: 2, content: "Software Algorithms & Tools" },
  { key: 3, content: "Deployment Scenarios" },
];

const product2 = [
  { key: 1, content: "IoT Hardware Modules" },
  { key: 2, content: "IoT Software & Platform Integration" },
];

const product3 = [
  { key: 1, content: "Hardware Modules for Infrastructure" },
  { key: 2, content: "Software for Urban Management & Analysis" },
];

export default function Products() {
  return (
    <section id="products">
      <Heading center margin>
        Products that Empower
      </Heading>
      <FlexBox>
        <Card
          imgSrc={
            <ProductImage
              source={"./images/visual-intelligence.jpg"}
            ></ProductImage>
          }
          header={"Title of the Above Image"}
          content={<List items={product1}></List>}
        />
        <Card
          imgSrc={
            <ProductImage source={"./images/management.jpg"}></ProductImage>
          }
          header={"Title of the Above Image"}
          content={<List items={product2}></List>}
        />
        <Card
          imgSrc={
            <ProductImage source={"./images/smart-solution.jpg"}></ProductImage>
          }
          header={"Title of the Above Image"}
          content={<List items={product3}></List>}
        />
      </FlexBox>
    </section>
  );
}
