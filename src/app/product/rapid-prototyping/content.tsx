import React from "react";
import { Button } from "../../common/Button";
import ReactMarkdown from "react-markdown";

const markdownContent = `

## How does it work?
Rapid Prototyping & Development is a process that quickly creates a scaled-down version of a product to test its functionality, design, and features. It involves iterative cycles of design, prototype creation, and testing.

## Hardware Prototyping Tools & Kits
  **Versatile Prototyping Tools:** Explore our extensive collection of prototyping tools, including breadboards, soldering kits, microcontrollers, sensors, and more. Our range covers a wide spectrum of applications, empowering you to prototype various projects with ease.

  **User-Friendly Design:** Our prototyping tools feature intuitive interfaces and user-friendly designs, making them accessible to beginners while providing advanced functionalities for experienced developers. Whether you are a student, hobbyist, or professional, our tools adapt to your skill level.

  **Customization and Compatibility:** Tailor your prototyping experience by customizing kits to match your specific project requirements. Our components are compatible with popular development platforms, allowing seamless integration and compatibility with a wide array of software and applications.

  **Modular Platforms:** Experience the flexibility of our modular hardware platforms. Designed for scalability and adaptability, these platforms enable you to experiment, test, and iterate your prototypes seamlessly.

## 3D Design & Simulation Software
  **Intuitive 3D Modeling:**  Unleash your creativity with our intuitive 3D modeling tools. Craft intricate designs, visualize concepts, and transform your ideas into detailed 3D models with ease.

  **Realistic Rendering:** Experience unparalleled realism with our advanced rendering capabilities. Bring your designs to life with lifelike textures, lighting effects, and environments, creating visuals that captivate and inspire.

  **Dynamic Simulation:** Test your designs under various conditions with our dynamic simulation features. Analyze motion, stress, and fluid dynamics, gaining valuable insights into the performance and behavior of your creations.

  **Customization and Extensibility:** Tailor the software to match your specific needs. Our customizable interfaces and extensible features allow you to adapt the software to your workflow, ensuring a personalized and efficient design experience..

  **Integration with 3D Printing:**  Seamlessly integrate your designs with 3D printing technology. Our software supports various file formats compatible with 3D printers, enabling you to bring your digital creations into the physical world effortlessly.
`;

export default function Content() {
  return (
    <div className="container mx-auto">
      <div className="p-4 my-6 md:my-12">
        <h1 className="text-2xl md:text-4xl text-primary font-semibold">
          Rapid Prototyping & Development
        </h1>
        <p className="mt-2">
          Turning ideas into tangible solutions swiftly and efficiently,
          fostering innovation and product evolution.
        </p>

        <h2 className="text-xl md:text-2xl text-primary mt-6 font-semibold">
          Accelerating Ideas to Reality: Rapid Prototyping & Development
          Solutions
        </h2>
        <p className="mt-2">
          At <text className="font-semibold">PRAXIO,</text> we specialize in
          turning concepts into reality at an unmatched pace. Our Rapid
          Prototyping & Development services empower businesses to innovate,
          iterate, and bring their products to market faster than ever before.
          Whether you{`'`}re a startup with a groundbreaking idea or an established
          enterprise seeking swift product enhancements, our expert team is here
          to transform your visions into tangible, high-quality prototypes and
          products.
        </p>

        <div className="my-8">
          <Button text={"Start Your Project"}></Button>
        </div>

        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-primary font-semibold text-lg" {...props} />
            ),
            p: ({ node, ...props }) => <p className="my-4" {...props} />,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
