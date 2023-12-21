import React from 'react'
import { Button } from '../common'

export default function Banner() {
  return (
    <>
      <div className='flex flex-wrap py-6'>
        <div className='text-primary'>
          <div className=' font-semibold  text-3xl '>
            Hardware Design & Prototyping
          </div>
          <div className=' text-black py-4 font-medium text-xl'>
            <text>Turning innovative ideas into tangible reality through expert hardware design and rapid prototyping solutions.</text>
          </div>
          <h6 className=' py-6 text-2xl font-semibold'>Innovative Designs, Seamless Prototypes: Transforming Ideas into Reality</h6>
          <div className='max-w-screen-2xl text-gray-700 text-base space-y-4'>
            <p className=''>At <span className='font-medium text-lg'>PRAXIO</span> , we specialize in cutting-edge hardware design and prototyping services. Our dedicated team of experienced engineers and designers is committed to bringing your
              innovative ideas to life. From concept development and schematic design to PCB layout, fabrication, and assembly, we offer comprehensive solutions tailored to your specific needs.</p>

              <p className=''>Our state-of-the-art facilities and advanced technologies enable us to create high-quality prototypes that meet industry standards and exceed expectations. Whether you're a startup
              with a groundbreaking product concept or an established business seeking to enhance your existing hardware, our expertise ensures seamless transition from design to physical
              prototype.</p>

              <p className=''>With a focus on precision, reliability, and innovation, we deliver exceptional hardware solutions that pave the way for your success. Partner with us and experience the journey of turning
              your vision into a tangible, functional prototype. Explore the possibilities with  <span className='font-medium text-lg'>PRAXIO</span>.</p>
          </div>
          <div className='py-6'>
          {/* <Button         
          text={'Start Your Project '}>
        </Button> */}
          </div>
          
        </div>

      </div>
    </>
  )
}
