import React from "react";
import Content from "./content";
import ContainerBox from "../components/ContainerBox";
import Heading from "../components/Heading";
import SubContent from "../components/SubContent";
import HeroSwipe from "../components/HeroSwipe";

export default function Support() {
  return (
    <>
      <HeroSwipe>
        <Heading green>Support</Heading>
        <SubContent>We&#39;re Here to Help!</SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
      </ContainerBox>
    </>
  );
}
