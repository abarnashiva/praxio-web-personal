import React from "react";
import { Button } from "../../common/Button";
import ReactMarkdown from "react-markdown";
import Heading from "@/app/components/Heading";
import SubContent from "@/app/components/SubContent";
import SubHeading from "@/app/components/SubHeading";
import Paragraph from "@/app/components/Paragraph";

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
    <div>
      <Heading>IoT Integration Development</Heading>
      <SubContent>
        IoT transforms the way we interact with the world, making our lives more
        convenient, efficient, and connected.
      </SubContent>

      <SubHeading>
        Connecting Your World, Enhancing Your Life: Embrace the IoT Revolution!
      </SubHeading>

      <Paragraph>
        At PRAXIO,we empower businesses to thrive in the digital age with our
        cutting-edge IoT Integration Development services. In an era where
        connectivity is paramount, our expert team specializes in seamlessly
        integrating smart devices, sensors, and systems, creating intelligent
        ecosystems that drive efficiency, enhance user experiences, and unlock
        unprecedented possibilities.
      </Paragraph>
      <Button text={"Start Your Project"}></Button>

      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2 className="text-primary font-bold text-lg py-3" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-700 py-4" {...props} />
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
