import React from 'react'

export default function FutureTechnology() {
  return (
    <div>
      <div className="text-center text-primary font-semibold text-2xl md:text-3xl mt-16">
        Crafting the Future of Technology
      </div>

      <div className="flex flex-wrap px-8 mt-4">
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src="./images/future-technology.png"
            className="object-cover mx-auto md:mx-0 bg-gray-100 py-16 lg:py-20 px-8 rounded-full"
          />
        </div>
        <div className="md:w-7/12 mt-4 md:my-auto">
          <p className="flex md:pl-12 lg:pr-16 text-md lg:text-lg justify-self-end">
            At Praxio, we{`'`}re more than just technologists. We{`'`}re
            visionaries. With a team that brings together decades of combined
            experience, we{`'`}re committed to shaping a world where technology
            amplifies potential and simplifies complexities. Our expertise spans
            the areas of business consulting, Application Development,
            implementation and support services in cutting edge technologies.
            <text className="contents text-primary font-semibold cursor-pointer">
              &nbsp;Learn more...
            </text>
          </p>
        </div>
      </div>
    </div>
  );
}
