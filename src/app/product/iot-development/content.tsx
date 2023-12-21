import React from "react";
import { Button } from "../../common/Button";
import ReactMarkdown from "react-markdown";

const markdownContent = `

## How does it work?
Internet of Things, works by connecting everyday devices to the internet, allowing them to communicate, collect data, and interact with each other autonomously.

##  Our IoT Hardware Modules
  **Sensors and Actuators:** From temperature and humidity sensors to motion detectors and motors, our sensors and actuators capture and manipulate real-world data, enabling your devices to interact intelligently with the environment.

  **Microcontrollers and Processors:** Our selection includes high-performance microcontrollers and processors that serve as the brains behind your IoT applications. These powerful components ensure swift data processing and seamless communication between devices.

  **Embedded Systems:** Our embedded systems are designed for specific IoT applications, providing tailored solutions for tasks such as industrial automation, healthcare monitoring, and smart home controls.

  **Security Features:** Security is paramount in IoT applications. Our hardware modules incorporate robust encryption, authentication, and secure boot features to safeguard data and prevent unauthorized access.

## Our IoT Software & Platform Integration
  **Custom IoT Software Development:** We design and develop tailored IoT software applications, ensuring they align perfectly with your unique business requirements. Our solutions facilitate real-time data processing, analysis, and visualization, enabling informed decision-making.

  **Mobile Application Development:** Our team develops intuitive and user-friendly mobile applications that enable users to monitor, manage, and interact with IoT devices on the go. Mobile integration ensures seamless control, empowering users with real-time data at their fingertips.

  **Cloud Platform Integration:** We seamlessly integrate IoT solutions with leading cloud platforms, providing scalable storage, robust security, and efficient data management. Cloud integration empowers businesses to access data from anywhere, facilitating remote monitoring and control of connected devices.

  **Third-Party API Integration:** We integrate IoT solutions with third-party APIs, enhancing functionality and expanding the capabilities of your connected ecosystem. Integration with external services and platforms broadens the scope of your IoT applications, providing comprehensive solutions to end-users.
`;

export default function Content() {
  return (
    <div className="container mx-auto">
      <div className="p-4 my-6 md:my-12">
        <h1 className="text-2xl md:text-4xl text-primary font-semibold">
          IoT Integration Development
        </h1>
        <p className="mt-2">
          IoT transforms the way we interact with the world, making our lives
          more convenient, efficient, and connected.
        </p>

        <h2 className="text-xl md:text-2xl text-primary mt-6 font-semibold">
          Connecting Your World, Enhancing Your Life: Embrace the IoT
          Revolution!
        </h2>
        <p className="mt-2">
          At <text className="font-semibold">PRAXIO,</text>we empower
          businesses to thrive in the digital age with our cutting-edge IoT
          Integration Development services. In an era where connectivity is
          paramount, our expert team specializes in seamlessly integrating smart
          devices, sensors, and systems, creating intelligent ecosystems that
          drive efficiency, enhance user experiences, and unlock unprecedented
          possibilities.
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
