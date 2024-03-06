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
        <Heading green>Software Development & Integration</Heading>
        <SubContent>
          Seamless software development and integration for innovative solutions
          and enhanced user experiences.
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
