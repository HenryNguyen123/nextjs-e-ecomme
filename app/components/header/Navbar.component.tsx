"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from './Navbar.module.scss'

export default function NavbarComponent() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // dropdown click
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`${style.navbarContainer} w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 dark:text-white shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar-container_item">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="no-underline! text-2xl font-bold text-blue-600 dark:text-blue-400">
            MinhNhatShop
          </Link>

          {/* Search Desktop */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-md px-4 py-2 rounded-full border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none"
            />
          </div>

          {/* Right icons Desktop */}
          <div className="hidden md:flex items-center space-x-6">

            {/* Dark Mode */}
            <button
              onClick={toggleDark}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {dark ? "🌞" : "🌙"}
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative no-underline! ">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
                3
              </span>
            </Link>

            {/* Avatar Dropdown */}
            <div
              ref={dropdownRef}
              className="relative inline-block"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Avatar */}
              <Image
                src="/images/users/avatar/avatar_anonymous.png"
                alt="User"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full cursor-pointer border"
              />

              {/* Dropdown */}
              <div
                className={`
                  absolute right-0 w-40 mt-2 bg-white dark:bg-gray-800
                  border dark:border-gray-700 rounded shadow-md
                  transition-all duration-200
                  ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
              >
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
                <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Orders
                </Link>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <p>111</p> */}
      </div>            





      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 pb-4">
          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full border dark:border-gray-700 bg-gray-100 dark:bg-gray-800"
            />
          </div>
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Home</Link>
          <Link href="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Products</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">About</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Contact</Link>

          {/* Mobile Dark mode */}
          <button
            onClick={toggleDark}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Mobile User Section */}
          <div className="px-4 py-2 border-t dark:border-gray-700 mt-2">
            <Link href="/profile" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Profile</Link>
            <Link href="/orders" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Orders</Link>
            <button className="w-full text-left py-2 hover:bg-gray-100 dark:hover:bg-gray-800">Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
}
