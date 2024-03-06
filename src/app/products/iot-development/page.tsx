import React from "react";
import Content from "./content";
import Box from "@/app/common/Box";
import ContainerBox from "@/app/components/ContainerBox";
import Heading from "../../components/Heading";
import SubContent from "../../components/SubContent";
import HeroSwipe from "../../components/HeroSwipe";

export default function SmartCity() {
  return (
    <>
      <HeroSwipe>
        <Heading green>IoT Integration Development</Heading>
        <SubContent>
          IoT transforms the way we interact with the world, making our lives
          more convenient, efficient, and connected.
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
