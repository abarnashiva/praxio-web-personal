import React from "react";
import FutureTechnology from "./home/future-technology";
import Hero from "./home/Hero";
import Products from "./home/Products";
import Services from "./home/Services";
import CenteredBoxWithButton from "./common/Box";
import Box from "./common/Box";

export default function Home() {
  return (
    <div>
      <Hero />
      <FutureTechnology />
      <Products />
      <Services />
      <Box />
    </div>
  );
}
