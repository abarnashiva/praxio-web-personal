import React from "react";
import Content from "./content";
import Box from "../../common/Box";
import ContainerBox from "@/app/components/ContainerBox";
import Heading from "../../components/Heading";
import SubContent from "../../components/SubContent";
import HeroSwipe from "../../components/HeroSwipe";

export default function SmartCity() {
  return (
    <>
      <HeroSwipe>
        <Heading green>Smart City Development Solutions</Heading>
        <SubContent>
          Harnessing technology for sustainable urban growth, enhanced citizen
          services, and efficient municipal management.
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
