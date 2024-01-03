import React from "react";
import FutureTechnology from "./home/future-technology";
import Hero from "./home/Hero";
import Products from "./home/Products";
import Services from "./home/Services";
import Box from "./common/Box";

export default function Page() {
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
