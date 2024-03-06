import React from "react";
import Content from "./content";
import ContainerBox from "../components/ContainerBox";
import Heading from "../components/Heading";
import SubContent from "../components/SubContent";
import HeroSwipe from "../components/HeroSwipe";

export default function Contact() {
  return (
    <>
      <HeroSwipe>
        <Heading green>Contact US</Heading>
        <SubContent>Get in touch with PRAXIO</SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
      </ContainerBox>
    </>
  );
}
