import React from "react";
import { Button } from "../../common/Button";
import ReactMarkdown from "react-markdown";

const markdownContent = `

## How does it work?
Smart city solutions integrate advanced technologies and data analytics to enhance urban infrastructure, optimize services, and improve the overall quality of life for residents, fostering a sustainable and interconnected urban environment.

## Hardware Modules for Infrastructure
  **Intelligent street lighting modules** revolutionize urban lighting. These energy-efficient LED fixtures are equipped with sensors and communication technologies, allowing for adaptive lighting based on real-time conditions. Smart street lighting enhances safety, reduces energy consumption, and contributes to a greener, more sustainable city.

  **Our environmental monitoring sensors** provide real-time data on air quality, noise levels, and other environmental parameters. These sensors help cities measure pollution, mitigate environmental risks, and implement effective urban planning strategies. By monitoring and analyzing environmental data, cities can make informed decisions to create healthier living environments for residents.

  **Intelligent traffic management solutions** incorporate advanced sensors, cameras, and communication devices to monitor traffic flow and congestion. These modules enable real-time traffic analysis, predictive modeling, and adaptive signaling, leading to reduced congestion, improved road safety, and enhanced overall mobility within the city.

  **Security and Surveillance Systems** Enhances public safety with our state-of-the-art security and surveillance hardware modules. Equipped with high-resolution cameras, facial recognition technology, and intelligent analytics, these systems provide robust security solutions for public spaces, critical infrastructure, and event venues. By ensuring a secure environment, cities can create a safer atmosphere for residents and visitors alike.

## Software for Urban Management & Analysis
  **Urban Management Software:** Our advanced urban management software streamlines various municipal functions, including waste management, transportation, energy usage, and public safety. By integrating data from IoT devices and sensors, we enable real-time monitoring and decision-making, ensuring cities operate seamlessly.

  **Infrastructure Monitoring:** Our software enables comprehensive monitoring of city infrastructure, such as bridges, roads, and public buildings. By implementing IoT sensors and predictive maintenance algorithms, cities can prevent failures, reduce downtime, and extend the lifespan of critical infrastructure assets.

  **Emergency Response Systems:** We develop robust emergency response software, integrating geospatial data and communication tools. This ensures rapid response and coordination during emergencies, helping cities minimize damage and save lives..

  **Citizen Engagement Platforms:** Foster community involvement and civic participation with our citizen engagement solutions. We create user-friendly platforms and mobile apps that enable residents to report issues, access local services, and engage in public consultations, promoting a sense of belonging and cooperation.
`;

export default function Content() {
  return (
    <div className="container mx-auto">
      <div className="p-4 my-6 md:my-12">
        <h1 className="text-2xl md:text-4xl text-primary font-semibold">
          Smart City Development Solutions
        </h1>
        <p className="mt-2">
          Harnessing technology for sustainable urban growth, enhanced citizen
          services, and efficient municipal management.
        </p>

        <h2 className="text-xl md:text-2xl text-primary mt-6 font-semibold">
          Empowering Smarter Futures: Our Smart City Development Solutions
        </h2>
        <p className="mt-2">
          At <text className="font-semibold">PRAXIO,</text> we specialize in
          cutting-edge Smart City Development Solutions designed to transform
          urban landscapes into efficient, connected, and eco-friendly
          environments. Our expert team of urban planners, engineers, and
          technology innovators collaborates to implement comprehensive
          solutions that enhance quality of life, improve infrastructure, and
          foster economic growth.
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
