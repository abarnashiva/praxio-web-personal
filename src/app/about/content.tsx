"use client";
import React from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import SemiHeading from "../components/SemiHeading";
import { Button } from "../common/Button";
import FlexContent from "../components/FlexContent";
import CardContent from "../components/Cardcontent";
import NumberUnFill from "../components/Numberunfill";
import Link from "next/link";
import CommonPadding from "../components/CommonPadding";

export default function Content() {
  return (
    <CommonPadding>
      <SubHeading>Empowering Tomorrow with Intelligent Solutions</SubHeading>
      <Paragraph>
        Established in 2018, PRAXIO is a beacon of innovation and commitment to
        reshaping urban environments. As an ISO 9001:2015 certified company, our
        dedication to quality and consistent excellence sets us apart. From our
        inception, we&#39;ve been driven by a vision of creating interconnected,
        intelligent, and sustainable cities. Merging expertise with passion, our
        team has been at the forefront of harnessing cutting-edge technologies
        like AI, IoT, and Visual Intelligence. With a customer-centric ethos, we
        pride ourselves on transforming visions into tangible solutions,
        offering end-to-end services that seamlessly integrate technology into
        urban spaces. We believe in a future where technology and
        nature harmoniously coexist, and we&#39;re dedicated to making that
        vision a reality.
      </Paragraph>
      <Link href="/contact">
        <Button text={"Contact Us"} />
      </Link>
      <SemiHeading top>Mission</SemiHeading>
      <Paragraph>
        To integrate pioneering technologies with urban development, providing
        sustainable, efficient, and intelligent solutions that enrich the lives
        of inhabitants and ensure harmonious growth for future generations.
      </Paragraph>
      <SemiHeading>Vision</SemiHeading>
      <Paragraph>
        To be a global leader in smart urban development, where our innovations
        set the benchmark, turning cities into thriving, eco-friendly, and
        technologically-advanced hubs of prosperity and well-being.
      </Paragraph>
      <SemiHeading bottom>Core Values</SemiHeading>
      <FlexContent>
        <CardContent>
          <NumberUnFill>01</NumberUnFill>
          <SemiHeading> Innovation</SemiHeading>
          <Paragraph>
            Constantly pushing boundaries to find better, more efficient
            solutions for the challenges of modern urban living.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>02</NumberUnFill>
          <SemiHeading>Collaboration</SemiHeading>
          <Paragraph>
            Believing in the power of unity, fostering a culture of teamwork,
            and partnering with communities and organizations to achieve mutual
            goals.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>03</NumberUnFill>
          <SemiHeading>Sustainability</SemiHeading>
          <Paragraph>
            Prioritizing the planet in every decision, ensuring that our
            solutions are eco-friendly and geared towards a greener tomorrow.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>04</NumberUnFill>
          <SemiHeading>Excellence</SemiHeading>
          <Paragraph>
            Striving for perfection in every project, product, and service,
            ensuring that our clients receive unparalleled value and quality.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>05</NumberUnFill>
          <SemiHeading>Integrity</SemiHeading>
          <Paragraph>
            Upholding the highest standards of honesty and transparency in all
            our dealings, fostering trust with our stakeholders.
          </Paragraph>
        </CardContent>
        <CardContent>
          <NumberUnFill>06</NumberUnFill>
          <SemiHeading>Quality</SemiHeading>
          <Paragraph>
            Pursuing excellence in all aspects of work, products, and services,
            ensuring high standards and attention to detail.
          </Paragraph>
        </CardContent>
      </FlexContent>
    </CommonPadding>
  );
}
