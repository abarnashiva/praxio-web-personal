import React from 'react'

export default function Banner() {
  return (
    <div>
      <div className='flex flex-wrap p-6 md:my-12'>
        <div className='md:w-6/12 md:mt-12 lg:mt-20 md:pr-6'>
          <p className='font-semibold my-auto text-2xl lg:text-4xl leading-10!'>
            Vision AI enables machines to understand and interpret visual information.
          </p>
        </div>

        <div className='md:w-6/12 mt-6 md:mt-0'>
          <img src="./images/service-banner.png" className=' mx-auto'/>
        </div>
      </div>
    </div>
  )
}
