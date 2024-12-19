import React from "react";
import Content from "./content";
import Box from "@/app/common/Box";
import ContainerBox from "@/app/components/ContainerBox";
import Heading from "../../components/Heading";
import SubContent from "../../components/SubContent";
import HeroSwipe from "../../components/HeroSwipe";

export default function VisualIntelligence() {
  return (
    <>
      <HeroSwipe>
        <Heading green>Visual Intelligence</Heading>
        <SubContent>
          Visual Intelligence enables machines to understand and interpret
          visual information.
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
