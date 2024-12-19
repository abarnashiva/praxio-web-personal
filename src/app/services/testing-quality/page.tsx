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
        <Heading green>Testing & Quality Assurance</Heading>
        <SubContent>
          Ensuring software reliability and performance through rigorous testing
          and quality assurance processes.
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
