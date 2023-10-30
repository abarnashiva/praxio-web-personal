import React from 'react'

export default function FutureTechnology() {
  return (
    <div>
        <div className='text-center text-primary font-semibold text-2xl md:text-3xl my-16'>
            Crafting the Future of Technology
        </div>

        <div className='flex flex-wrap px-8'>
            <div className='w-full md:w-4/12'>
                <img src="./images/future-technology.png" className='object-cover mx-auto md:mx-0' />
            </div>
            <div className='md:w-8/12 mt-4 md:mt-8 lg:mt-12'>
                <p className='md:pl-12 lg:px-20 text-md lg:text-lg 2xl:w-8/12'>
                    At Praxio, we{`'`}re more than just technologists. We{`'`}re visionaries. With a team
                    that brings together decades of combined experience, we{`'`}re committed to
                    shaping a world where technology amplifies potential and simplifies complexities
                    <text className='grid text-blue-500 font-semibold cursor-pointer'>Know more...</text>
                </p>
            </div>
        </div>
    </div>
  )
}
