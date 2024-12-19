import React from "react";
import Card from "../common/Card";
import Heading from "../components/Heading";
import FlexBox from "../components/FlexBox";
import List from "../components/List";
import ProductImage from "../components/ProductImage";
import Link from "next/link";
import ContainerBox from "../components/ContainerBox";
import CommonPadding from "../components/CommonPadding";

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
    <section id="products" className="reveal">
      <CommonPadding>
        <ContainerBox>
          <Heading center margin>
            Products that Empower
          </Heading>
          <FlexBox>
            <Link href="/products/visual-intelligence">
              <Card
                imgSrc={
                  <ProductImage
                    source={"./images/visual-intelligence.jpg"}
                  ></ProductImage>
                }
                header={<p>Visual Intelligence Platform</p>}
                content={<List items={product1}></List>}
              />
            </Link>
            <Link href="/products/iot-development">
              <Card
                imgSrc={
                  <ProductImage
                    source={"./images/management.jpg"}
                  ></ProductImage>
                }
                header={<p>IoT Management Platform</p>}
                content={<List items={product2}></List>}
              />
            </Link>
            <Link href="/products/smart-city">
              <Card
                imgSrc={
                  <ProductImage
                    source={"./images/smart-solution.jpg"}
                  ></ProductImage>
                }
                header={<p>Smart City Solutions</p>}
                content={<List items={product3}></List>}
              />
            </Link>
          </FlexBox>
        </ContainerBox>
      </CommonPadding>
    </section>
  );
}
