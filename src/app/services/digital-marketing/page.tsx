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
        <Heading green>Digital Marketing</Heading>
        <SubContent>
          Unlock Your Digital Potential with Praxio&#39s Expert Marketing
          Solutions
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
