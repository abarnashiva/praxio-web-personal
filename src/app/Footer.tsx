"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import FlexSocial from "./components/FlexSocial";
import Icons from "./components/Icons";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import Paragraph from "./components/Paragraph";
import FlexBox from "./components/FlexBox";
import FlexContent from "./components/FlexContent";
import SubHeading from "./components/SubHeading";
import ContainerBox from "./components/ContainerBox";

export default function Footer() {
  const [smallScreen, setSmallScreen] = useState(true);
  const currentYear = new Date().getFullYear();

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 900);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="bg-banner text-white pt-6">
      <ContainerBox>
        {smallScreen && (
          <FlexBox logo>
            <div>
              <Link href="/">
                <img src="/footer logo.png" alt="logo" className="w-40" />
              </Link>
              <FlexSocial centerAlign>
                <Icons white small>
                  <FaFacebookF />
                </Icons>
                <Icons white small>
                  <BsInstagram />
                </Icons>
                <Icons white small>
                  <BsLinkedin />
                </Icons>
              </FlexSocial>
            </div>
          </FlexBox>
        )}
        <FlexBox footer>
          {!smallScreen && (
            <FlexBox logo>
              <div>
                <Link href="/">
                  <img src="/footer logo.png" alt="logo" className="w-40" />
                </Link>
                <FlexSocial centerAlign>
                  <Icons white small>
                    <FaFacebookF />
                  </Icons>
                  <Icons white small>
                    <BsInstagram />
                  </Icons>
                  <Icons white small>
                    <BsLinkedin />
                  </Icons>
                </FlexSocial>
              </div>
            </FlexBox>
          )}
          <div>
            <SubHeading whiteText>Quick Links</SubHeading>
            <FlexContent normal>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
              <Link href="/about" className="hover:text-secondary">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-secondary">
                Contact
              </Link>
              <Link href="/support" className="hover:text-secondary">
                Support
              </Link>
            </FlexContent>
          </div>
          <div>
            <SubHeading whiteText>Products & Solutions</SubHeading>
            <FlexContent normal>
              <Link
                href="/products/visual-intelligence"
                className="hover:text-secondary"
              >
                Visuals Intelligence Platform
              </Link>
              <Link
                href="/products/iot-development"
                className="hover:text-secondary"
              >
                IoT Management Platform
              </Link>
              <Link
                href="/products/smart-city"
                className="hover:text-secondary"
              >
                Smart City Solutions
              </Link>
              <Link
                href="/products/rapid-prototyping"
                className="hover:text-secondary"
              >
                Rapid Prototyping
              </Link>
            </FlexContent>
          </div>
          <div>
            <SubHeading whiteText>Services</SubHeading>
            <FlexContent normal>
              <Link
                href="/services/hardware-design"
                className="hover:text-secondary"
              >
                Custom Hardware Design & Prototyping
              </Link>
              <Link
                href="/services/software-development"
                className="hover:text-secondary"
              >
                Custom Software Development & Integration
              </Link>
              <Link
                href="/services/testing-quality"
                className="hover:text-secondary"
              >
                Testing & Quality Assurance
              </Link>
              <Link
                href="/services/deployment"
                className="hover:text-secondary"
              >
                Deployment & Scalability
              </Link>
              <Link
                href="/services/digital-marketing"
                className="hover:text-secondary"
              >
                Digital Marketing
              </Link>
            </FlexContent>
          </div>
          <FlexContent normal>
            <div>
              <SubHeading whiteText>Connect</SubHeading>
              <Paragraph footerText>
                No. 17, IInd Floor, SANHASA SQUARE,
              </Paragraph>
              <Paragraph footerText>Bharathi Park Rd,</Paragraph>
              <Paragraph footerText>Bharathi Pk Cross Rd 3,</Paragraph>
              <Paragraph footerText>Coimbatore,</Paragraph>
              <Paragraph footerText>Tamil Nadu 641043.</Paragraph>
              <div>
                <FlexBox content>
                  <MdOutlinePhone className="text-xl" />
                  096000 43335
                </FlexBox>
                <FlexBox content>
                  <MdOutlineEmail className="text-xl" />
                  info@praxio.in
                </FlexBox>
              </div>
            </div>
          </FlexContent>
        </FlexBox>

        <Paragraph whiteText>Copyright © {currentYear} Praxio</Paragraph>
      </ContainerBox>
    </footer>
  );
}
