import React from 'react';

function Services() {
  return (
    <section id="services" className="py-10">
      <h2 className="text-center text-2xl mb-8">Our Services</h2>
      <div className="flex space-x-4 px-7">
        <div className="flex-1 p-5 border">
          <h3 className="text-xl mb-4">Service 1</h3>
          <p>Description of Service 1.</p>
        </div>
        <div className="flex-1 p-5 border">
          <h3 className="text-xl mb-4">Service 2</h3>
          <p>Description of Service 2.</p>
        </div>
        <div className="flex-1 p-5 border">
          <h3 className="text-xl mb-4">Service 3</h3>
          <p>Description of Service 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
