import React from "react";
import Content from "./content";
import ContainerBox from "@/app/components/ContainerBox";
import Box from "@/app/common/Box";
import Heading from "../../components/Heading";
import HeroSwipe from "../../components/HeroSwipe";
import SubContent from "@/app//components/SubContent";

export default function SmartCity() {
  return (
    <>
      <HeroSwipe>
        <Heading green>Rapid Prototyping & Development</Heading>
        <SubContent>
          Turning ideas into tangible solutions swiftly and efficiently,
          fostering innovation and product evolution.
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
