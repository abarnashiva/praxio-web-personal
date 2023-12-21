import Link from 'next/link';
import React from 'react';
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="flex flex-wrap p-4 md:p-6 lg:p-8">
        <div className="md:w-3/12">
          <img src="" alt="logo" />
        </div>

        <div className="md:w-6/12">
          <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-4">
            Quick Links
          </h2>
          <div className="flex gap-12">
            <div className="md:w-2/12 grid gap-2">
              <Link href="">Home</Link>
              <Link href="">About Us</Link>
              <Link href="">Contact</Link>
              <Link href="">Support</Link>
            </div>

            <div className="md:w-4/12 grid gap-3">
              <text className="text-lg font-medium">Products & Solutions</text>
              <Link href="">Visuals Intelligence Platform</Link>
              <Link href="">IoT Management Platform</Link>
              <Link href="">Smart City Solutions</Link>
              <Link href="">Rapid Prototyping</Link>
            </div>

            <div className="md:w-6/12 grid gap-3">
              <text className="text-lg font-medium">Service</text>
              <Link href="">Custom Hardware Design & Prototyping</Link>
              <Link href="">Custom Software Development & Integration</Link>
              <Link href="">Testing & Quality Assurance</Link>
              <Link href="">Deployment & Scalability</Link>
            </div>
          </div>
        </div>

        <div className="md:w-3/12">
          <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-4">
            Connect
          </h2>
          <p className="leading-loose">
            No. 17, IInd Floor, Sanhasa Square, Bharathi Park Rd, Bharathi Pk
            Cross Rd 3, Coimbatore, Tamil Nadu 641043.
          </p>
          <div className="mt-4">
            <p className="flex gap-2 items-center mb-2">
              <MdOutlinePhone className="text-xl" />
              096000 43335
            </p>
            <p className="flex gap-2 items-center">
              <MdOutlineEmail className="text-xl" />
              sales@praxio.in
            </p>
          </div>
        </div>
      </div>

      <div className="py-3 border-t-2 border-[##FFFFFF]">
        <p className="mx-auto">
          Copyright © 2023 PRAXIO IT CONSULTING PRIVATE LIMITED,
        </p>
      </div>
    </footer>
  );
}
