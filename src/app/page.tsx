"use client";
import React, { useEffect } from "react";
import FutureTechnology from "./home/future-technology";
import Hero from "./home/Hero";
import Products from "./home/Products";
import Services from "./home/Services";
import Box from "./common/Box";
import ContainerBox from "./components/ContainerBox";

export default function Page() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      const scroll = document.querySelectorAll(".scroll");
      const top = document.querySelectorAll(".backToTop");
      const features = document.querySelectorAll(".features");
      const windowHeight = window.innerHeight;

      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          top[i]?.classList.add("hide");
          scroll[i]?.classList.add("hide");
        } else {
          reveals[i].classList.remove("active");
          top[i]?.classList.remove("hide");
          scroll[i]?.classList.remove("hide");
        }
      }

      for (let j = 0; j < features.length; j++) {
        const elementTop = features[j].getBoundingClientRect().right; // Corrected variable name
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          features[j].classList.add("active");
        } else {
          features[j].classList.remove("active");
        }
      }
    }

    // Add event listener only on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", reveal);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", reveal);
      };
    }
  }, []);

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
