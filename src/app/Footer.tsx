import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center">
      <div className='flex flex-wrap p-4 md:p-6 lg:p-8'>
        <div className='md:w-4/12 text-left'>
          <h2 className='text-lg md:text-xl font-medium mb-2 md:mb-4'>Quick Links</h2>
          <div className='flex gap-12 md:text-lg'>
            <div className='ma:w-6/12 grid gap-3'>
              <Link href="">Home</Link>
              <Link href="">About Us</Link>
              <Link href="">Our Services</Link>
              <Link href="">Our products</Link>
            </div>

            <div className='md:w-6/12 grid gap-3'>
              <Link href="">Resources</Link>
              <Link href="">news Letter</Link>
              <Link href="">Careers</Link>
              <Link href="">Contact</Link>
            </div>
          </div>
          <div className='gap-3 flex text-right pt-4 items-center'>
            <FaFacebookF className="text-xl" />
            <RiInstagramFill className="text-2xl" />
            <FaLinkedin className="text-2xl" />
          </div>
        </div>
        <div className='mt-4 md:mt-0 md:w-3/12 text-left'>
          <h2 className='text-lg md:text-xl font-medium mb-2 md:mb-4'>Connect</h2>
          <div className='md:text-lg w-8/12'>
            <p className='leading-loose'>
              No. 17, IInd Floor, Sanhasa Square,
              Bharathi Park Rd,
              Bharathi Pk Cross Rd 3,
              Coimbatore,
              Tamil Nadu 641043.
            </p>

            <div className='leading-8 mt-2'>
              <div className='flex gap-4 items-center'>
                <MdOutlinePhone className="text-xl" />
                <text>096000 43335</text>
              </div>
              <div className='flex gap-4 items-center'>
                <MdOutlineEmail className="text-xl" />
                <text>sales@praxio.in</text>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 md:mt-0 md:w-5/12 md:pl-4 lg:pl-20'>
          <h2 className='text-lg md:text-xl font-medium mb-2 md:mb-4 text-left'>Map Location</h2>
          <div className='mt-4'>
            <img src="./images/map.png" className='object-cover w-full' />
          </div>
        </div>
      </div>

      <div className='py-3 border-t-2 border-[##FFFFFF]'>
        <p className='mx-auto'>Copyright © 2023 PRAXIO IT CONSULTING PRIVATE LIMITED,</p>
      </div>
    </footer>
  );
}
