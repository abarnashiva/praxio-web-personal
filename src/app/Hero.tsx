"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Controller, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper as SwiperType } from "swiper";
import { Button } from "./common";

const phrases = [
  {
    label: "Vision AI",
    image: "vision AI image",
    description: "Crafting the future, one pixel at a time",
  },
  {
    label: "IoT Solutions",
    image: "IoT image",
    description: "Connecting Tomorrow, Today: Unleash the Power of IoT",
  },
  {
    label: "Smart City Solutions",
    image: "smart city image",
    description: "The blueprint for tomorrow’s cities starts here",
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
            <div className="flex">
              <div className="flex-1 flex flex-col items-start gap-4 py-24 px-7">
                <h1 className="text-5xl">{phrase.label}</h1>
                <p className="">{phrase.description}</p>
                <Button text="Learn More" />
              </div>
              <div className="flex-1 flex h-[clamp(500px,_60vw,_700px)] bg-gray-200">
                <p className="m-auto">{phrase.image}</p>
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
            <SwiperSlide key={index}>
              <div
                className={`w-16 h-1 transition-colors bg-${
                  active === index ? "red" : "gray"
                }-400 mb-2`}
              ></div>
              <h1 className="text-xl">{phrase.label}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
