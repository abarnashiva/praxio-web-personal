import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Footer from "./Footer";
import FutureTechnology from "./future-technology";

function App() {
  return (
    <div className="font-sans min-h-screen text-gray-900 bg-white flex flex-col">
      <Header />
      <Hero />
      <FutureTechnology />
      <Products />
      <Services />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
