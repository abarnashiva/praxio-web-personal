import React from "react";

function Products() {
  return (
    <section id="products" className="py-10">
      <h2 className="text-center text-2xl mb-8">Our Products and Solutions</h2>
      <div className="flex space-x-4 px-7">
        <div className="flex-1 flex flex-col gap-3 p-5 border">
          <div className="w-full h-64 bg-neutral-200">image</div>
          <h3 className="text-xl">Product 1</h3>
          <p>Description of Product 1.</p>
        </div>
        <div className="flex-1 flex flex-col gap-3 p-5 border">
          <div className="w-full h-64 bg-neutral-200">image</div>
          <h3 className="text-xl">Product 2</h3>
          <p>Description of Product 2.</p>
        </div>
        <div className="flex-1 flex flex-col gap-3 p-5 border">
          <div className="w-full h-64 bg-neutral-200">image</div>
          <h3 className="text-xl">Product 3</h3>
          <p>Description of Product 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
