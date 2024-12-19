import React from "react";
import Content from "./content";
import Box from "@/app/common/Box";
import ContainerBox from "@/app/components/ContainerBox";
import Heading from "../../components/Heading";
import SubContent from "../../components/SubContent";
import HeroSwipe from "../../components/HeroSwipe";

export default function Service() {
  return (
    <>
      <HeroSwipe>
        <Heading green>Hardware Design & Prototyping</Heading>
        <SubContent>
          Turning innovative ideas into tangible reality through expert hardware
          design and rapid prototyping solutions.
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
