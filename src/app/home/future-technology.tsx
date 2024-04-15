import React from "react";
import Heading from "../components/Heading";
import FlexFuture from "../components/FlexFuture";
import FutureImage from "../components/FutureImage";
import FutureContent from "../components/FutureContent";
import Paragraph from "../components/Paragraph";
import ContainerBox from "../components/ContainerBox";
import { Button } from "../common/Button";
import Link from "next/link";

export default function FutureTechnology() {
  return (
    <div className="reveal">
      <ContainerBox>
        <Heading center margin>
          Crafting the Future of Technology
        </Heading>
        <FlexFuture>
          <FutureImage source={"./images/future-technology.png"}></FutureImage>
          <FutureContent>
            <div>
              <Paragraph large>
                We&#39;re more than just technologists. We&#39;re visionaries.
                With a team that brings together decades of combined experience,
                we&#39;re committed to shaping a world where technology
                amplifies potential and simplifies complexities. Our expertise
                spans the areas of business consulting, Application Development,
                implementation and support services in cutting edge
                technologies.
              </Paragraph>
              <div className="flex">
                <Link href={"/about"}>
                  <Button text={"Learn More"}></Button>
                </Link>
              </div>
            </div>
          </FutureContent>
        </FlexFuture>
      </ContainerBox>
    </div>
  );
}
