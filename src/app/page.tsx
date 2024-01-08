import React from "react";
import FutureTechnology from "./home/future-technology";
import Hero from "./home/Hero";
import Products from "./home/Products";
import Services from "./home/Services";
import Box from "./common/Box";
import ContainerBox from "./components/ContainerBox";

export default function Page() {
  return (
    <>
      <Hero />
      <FutureTechnology />
      <Products />
      <Services />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
