"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper as SwiperType } from "swiper";
import { Button } from "../common/Button";
import MainHeading from "../components/MainHeading";
import Paragraph from "../components/Paragraph";
import HeroText from "../components/HeroText";
import HeroContent from "../components/HeroContent";
import HeroSwipe from "../components/HeroSwipe";
import ContainerBox from "../components/ContainerBox";
import Link from "next/link";

const phrases = [
  {
    label: "Visual Intelligence",
    heading: "Elevate Your Understanding with",
    description:
      "We use Visual Intelligence to swiftly transform data into meaningful insights, providing clarity in a world of information overload and empowering your decision making process.",
    shortDescription: "See Beyond with Visual Artificial Intelligence",
    name: "Explore Visual Intelligence Now",
    url: "/products/visual-intelligence",
    background: "../images/dark 1.jpg",
  },
  {
    label: "IoT Management Platform",
    heading: "Unlock the Future with seamless",
    description:
      "Our IoT Management Platform redefine connectivity, communication, and creation. Enter a realm where devices collaborate effortlessly, data transforms into actionable insights, and innovation knows no bounds.",
    shortDescription: "Connecting the World, One Device at a Time",
    name: "Explore our IoT Management Platform",
    url: "/products/iot-development",
    background: "../images/dark 2.jpg",
  },
  {
    label: "Smart City Solutions",
    heading: "Discover Seamless",
    description:
      "We pioneer smart and sustainable cities with innovative and cutting-edge solutions, transforming urban living for enhanced efficiency, safety, environmental stewardship, and resident well-being.",
    shortDescription: "Connecting Cities, Empowering Communities",
    name: "Explore our Smart City Solutions",
    url: "/products/smart-city",
    background: "../images/dark 3.jpg",
  },
  {
    label: "Rapid Prototyping",
    heading: "Unleash Your Ideas Faster with",
    description:
      "We break through the barriers of traditional development and swiftly bring your visionary ideas to life with our cutting-edge rapid prototyping solutions, fostering innovation, creativity, and tangible results.",
    shortDescription:
      "Accelerates product development by quickly creating and testing initial design concepts",
    name: "Explore our Rapid Prototype Solutions",
    url: "/products/rapid-prototyping",
    background: "../images/dark 4.jpg",
  },
];

const Hero: React.FC = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = React.useState<SwiperType>();
  const [secondSwiper, setSecondSwiper] = React.useState<SwiperType>();
  const [active, setActive] = React.useState<number>(0);

  firstSwiper?.on("slideChange", (swiper) => {
    setActive(swiper.realIndex);
  });

  return (
    <div>
      <div className="relative">
          <Swiper
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Controller, Autoplay, EffectFade]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            {phrases.map((phrase, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-cover bg-center md:h-full h-screen"
                  style={{
                    backgroundImage: `url('${phrase.background}')`,
                  }}
                >
                    <ContainerBox>
                      <HeroContent>
                        <HeroText white>{phrase.heading}</HeroText>
                        <MainHeading>{phrase.label}</MainHeading>
                        <div className="max-w-2xl ">
                          <Paragraph swiperText>{phrase.description}</Paragraph>
                        </div>
                        <Link href={`${phrase.url}`}>
                          <Button text={"Learn More"} />
                        </Link>
                      </HeroContent>
                    </ContainerBox>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
      <HeroSwipe future>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: phrases.length,
            },
          }}
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
        >
          {phrases.map((phrase, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {
                firstSwiper?.slideTo(index);
              }}
            >
              <div className=" mb-2 h-1">
                <div
                  className={`h-full transition-colors rounded-md ${
                    active === index ? "progress-animation" : ""
                  }  `}
                ></div>
              </div>
              <div
                className={`${
                  active === index ? "text-secondary" : "text-white"
                }`}
              >
                <h2 className="font-semibold text-2xl hover:cursor-pointer">
                  {phrase.label}
                </h2>
                <p className="hover:cursor-pointer py-2">
                  {phrase.shortDescription}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroSwipe>
    </div>
  );
};

export default Hero;
