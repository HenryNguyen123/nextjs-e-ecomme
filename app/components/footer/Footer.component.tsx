import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="w-full dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* LOGO + DESC */}
          <div className="flex flex-col md:items-center">
            <div className="flex items-center mb-4 lg:justify-center">
              <Image
                src="/images/logo/website/logoIndex.png"
                alt="logo"
                width={45}
                height={45}
                className="mr-2"
              />
              <h2 className="text-2xl font-bold dark:text-white">
                MinhNhat<span className="text-primary">Shop</span>
              </h2>
            </div>

            <p className="text-sm  dark:text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex gap-3">
              <FaFacebook className="text-2xl text-blue-600 cursor-pointer" />
              <FaInstagramSquare className="text-2xl text-rose-400 cursor-pointer" />
              <FaSquareThreads className="text-2xl cursor-pointer dark:text-white" />
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-bold text-lg mb-3 dark:text-white">
              MinhNhat Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline dark:text-gray-300">Home</Link></li>
              <li><Link href="#" className="hover:underline dark:text-gray-300">Products</Link></li>
              <li><Link href="#" className="hover:underline dark:text-gray-300">Blogs</Link></li>
              <li><Link href="#" className="hover:underline dark:text-gray-300">About</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-bold text-lg mb-3 dark:text-white">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline dark:text-gray-300">Company</Link></li>
              <li><Link href="#" className="hover:underline dark:text-gray-300">Account</Link></li>
              <li><Link href="#" className="hover:underline dark:text-gray-300">Blogs</Link></li>
              <li><Link href="#" className="hover:underline dark:text-gray-300">About</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-lg mb-3 dark:text-white">
              Get in touch
            </h4>
            <p className="text-sm dark:text-gray-300">Toll Free Customer Care</p>
            <p className="text-sm font-semibold dark:text-white">+84 123456789</p>
            <p className="text-sm dark:text-gray-300 mt-2">Need live support?</p>
            <p className="text-sm dark:text-gray-300">nhokkudo143@gmail.com</p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-bold text-lg mb-3 dark:text-white">
              Newsletter
            </h4>
            <p className="text-sm dark:text-gray-300 mb-2">
              Subscribe to receive future updates
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
