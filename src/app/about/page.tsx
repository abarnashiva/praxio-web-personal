import React from "react";
import Content from "./content";
import Box from "@/app/common/Box";
import ContainerBox from "../components/ContainerBox";
import Heading from "../components/Heading";
import SubContent from "../components/SubContent";
import HeroSwipe from "../components/HeroSwipe";

export default function About() {
  return (
    <>
      <HeroSwipe>
        <Heading green>About US</Heading>
        <SubContent>
          Your Vision, Our Innovation - A Brighter Tomorrow
        </SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
        <Box />
      </ContainerBox>
    </>
  );
}
