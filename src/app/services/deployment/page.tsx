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
        <Heading green>Deployment & Scalability</Heading>
        <SubContent>
          Seamless deployment of cutting-edge technologies and the ability to
          scale operations are pivotal factors.
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
