"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Controller, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper as SwiperType } from "swiper";
import { Button } from "../common/Button";
import MainHeading from "../components/MainHeading";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import HeroImage from "../components/HeroImage";
import HeroText from "../components/HeroText";
import HeroContent from "../components/HeroContent";
import FlexBox from "../components/FlexBox";
import HeroSwipe from "../components/HeroSwipe";
import { useRouter } from "next/navigation";
import Link from "next/link";

const phrases = [
  {
    label: "Visual Intelligence",
    heading: "Elevate Your Understanding with",
    image: `${"./images/vision-ai.jpg"}`,
    description:
      "At PRAXIO, we use Visual Intelligence to swiftly transform data into meaningful insights, providing clarity in a world of information overload and empowering your decision-making process.",
    shortDescription: "See Beyond with Visual Artificial Intelligence",
    name: "Explore Visual Intelligence Now",
    url: "/products/visual-intelligence",
  },
  {
    label: "IoT Solutions",
    heading: "Unlock the Future with seamless",
    image: "./images/iot-solution.jpg",
    description:
      "At PRAXIO, our IoT solutions redefine connectivity, communication, and creation. Enter a realm where devices collaborate effortlessly, data transforms into actionable insights, and innovation knows no bounds.",
    shortDescription: "Connecting the World, One Device at a Time",
    name: "Explore our IOT Solutions",
    url: "/products/iot-development",
  },
  {
    label: "Smart City Solutions",
    heading: "Discover Seamless",
    image: "./images/smart-city.jpg",
    description:
      "At PRAXIO, our IoT solutions redefine connectivity, communication, and creation. Enter a realm where devices collaborate effortlessly, data transforms into actionable insights, and innovation knows no bounds.",
    shortDescription: "Connecting Cities, Empowering Communities",
    name: "Explore our Smart City Solutions",
    url: "/products/smart-city",
  },
  {
    label: "Rapid Prototyping",
    heading: "Unleash Your Ideas Faster with",
    image: "./images/rapid-prototyping.jpg",
    description:
      "At PRAXIO where innovation meets speed. Break through the barriers of traditional development and bring your ideas to life swiftly with our cutting-edge rapid prototyping solutions",
    shortDescription:
      "Accelerates product development by quickly creating and testing initial design concepts",
    name: "Explore our Rapid Prototype Solutions",
    url: "/products/rapid-prototyping",
  },
];

const Slide: React.FC<{ phrase: (typeof phrases)[0] }> = (props) => {
  const swiperSlide = useSwiperSlide();
  const selectionClass = swiperSlide.isActive ? "red" : "neutral";

  return (
    <>
      <div className={`w-16 h-1 bg-${selectionClass}-400 mb-2`}></div>
      <h1 className="text-xl">{props.phrase.label}</h1>
    </>
  );
};

const Hero: React.FC = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = React.useState<SwiperType>();
  const [secondSwiper, setSecondSwiper] = React.useState<SwiperType>();
  const [active, setActive] = React.useState<number>(0);
  const router = useRouter();

  firstSwiper?.on("slideChange", (swiper) => {
    setActive(swiper.realIndex);
  });

  return (
    <div>
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
            <FlexBox normal>
              <HeroContent>
                <HeroText>{phrase.heading}</HeroText>
                <MainHeading>{phrase.label}</MainHeading>
                <Paragraph>{phrase.description}</Paragraph>
                <Button
                  text={phrase.name}
                  onClick={() => router.push(`${phrase.url}`)}
                />
              </HeroContent>
              <HeroImage source={phrase.image}></HeroImage>
            </FlexBox>
          </SwiperSlide>
        ))}
      </Swiper>
      <HeroSwipe>
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
              <div>
                <Heading black>{phrase.label}</Heading>
                <Paragraph>{phrase.shortDescription}</Paragraph>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroSwipe>
    </div>
  );
};

export default Hero;
