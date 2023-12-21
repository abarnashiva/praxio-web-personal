"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Controller, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper as SwiperType } from "swiper";
import { Button } from "../common/Button";

const phrases = [
  {
    label: "Visual Intelligence",
    heading: "Elevate Your Understanding with",
    image: `${"./images/vision-ai.jpg"}`,
    description:
      "At PRAXIO, we use Visual Intelligence to swiftly transform data into meaningful insights, providing clarity in a world of information overload and empowering your decision-making process.",
    shortDescription: "See Beyond with Visual Artificial Intelligence",
    name: "Explore Visual Intelligence Now",
  },
  {
    label: "IoT Solutions",
    heading: "Unlock the Future with seamless",
    image: "./images/iot-solution.jpg",
    description:
      "At PRAXIO, our IoT solutions redefine connectivity, communication, and creation. Enter a realm where devices collaborate effortlessly, data transforms into actionable insights, and innovation knows no bounds.",
    shortDescription: "Connecting the World, One Device at a Time",
    name: "Explore our IOT Solutions",
  },
  {
    label: "Smart City Solutions",
    heading: "Discover Seamless",
    image: "./images/smart-city.jpg",
    description:
      "At PRAXIO, our IoT solutions redefine connectivity, communication, and creation. Enter a realm where devices collaborate effortlessly, data transforms into actionable insights, and innovation knows no bounds.",
    shortDescription: "Connecting Cities, Empowering Communities",
    name: "Explore our Smart City Solutions",
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
            <div className="flex flex-wrap">
              <div className=" flex-1 flex flex-col min-w-[20rem] items-start gap-4 py-24 px-7">
                <text className="text-lg font-semibold opacity-75">
                  {phrase.heading}
                </text>
                <h1 className="text-5xl text-primary font-semibold">
                  {phrase.label}
                </h1>
                <div className="h-16">{phrase.description}</div>
                <Button text={phrase.name} />
              </div>
              <div className=" flex-1 flex min-w-[20rem] h-[clamp(25rem,_60vw,_700px)]">
                <img
                  src={phrase.image}
                  className="object-cover w-full my-4"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full bg-red-100 p-7">
        <Swiper
          spaceBetween={50}
          slidesPerView={phrases.length}
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
              <div
                className={`w-16 h-1 transition-colors ${
                  active === index ? "bg-red-400" : "bg-gray-400"
                } mb-2`}
              ></div>
              <h1 className="text-xl font-medium hover:cursor-pointer">
                {phrase.label}
              </h1>
              <p className="hover:cursor-pointer">{phrase.shortDescription}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
