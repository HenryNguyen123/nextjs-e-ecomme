"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from './Navbar.module.scss'
import { useDispatch, useSelector } from "react-redux"
import type {RootState, AppDispatch} from '../../redux/stores/stores.redux'
import {getLogin} from '../../redux/slices/account/account.slice'
import type {UserData} from '../../redux/slices/account/account.slice'
import {logoutAuthentication} from '../../redux/slices/auth/logout.slice'
import { useRouter } from "next/navigation"

export default function NavbarComponent() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()

  const isLogin: boolean = useSelector((state: RootState) => state.account.isLogin)
  const data: UserData | null= useSelector((state: RootState) => state.account.data)

  //logout
  const checkIsLogin: boolean = useSelector((state: RootState) => state.logout.isLogin) 

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const handleCallAuthen = async () => {
      try {
         await dispatch(getLogin())
      } catch (error) {
          console.error("Auth check failed:", error)
      }
  }

  const handleLogoutUser = async() => {
      try {
          const pathPage = window.location.pathname
          const data = await dispatch(logoutAuthentication(pathPage)).unwrap()
          if (data.EC === 0 && data.DT) {
              router.push(data.DT.path)
              return window.location.reload()
          } 
      } catch (error) {
          console.log(error)
      }
  }

  const handleClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      router.push('/clients/auth/login')
  }

  useEffect(() => {
      handleCallAuthen()
  }, [])

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
          <Link href="/" className="no-underline! text-2xl text-white font-bold text-white-600 dark:text-blue-400">
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
            {
              data && (
                <div
                  ref={dropdownRef}
                  className="relative inline-block"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {/* Avatar */}
                  {/* login basic */}
                  {
                    !data.data.loginBy || data?.data?.loginBy === '' && (
                      <Image
                            src={data?.data.avatar 
                            ? `${process.env.NEXT_PUBLIC_SERVER_URL}${data.data.avatar}`
                            : "/images/users/avatar/avatar_anonymous.png"}
                            alt="avatar"
                            width={40}
                            height={40}
                            className="rounded-circle"
                      />
                    )
                  }
                  {/* Oauth2 */}
                  {
                    data?.data?.loginBy !== '' && (
                      <Image
                            src={data?.data.avatar 
                            ? `${data.data.avatar}`
                            : "/images/users/avatar/avatar_anonymous.png"}
                            alt="avatar"
                            width={40}
                            height={40}
                            className="rounded-circle"
                      />
                    )
                  }

                  {/* Dropdown */}
                  <div
                    className={`
                      absolute right-0 w-40 mt-2 bg-white dark:bg-gray-800
                      border dark:border-gray-700 rounded shadow-md
                      transition-all duration-200
                      ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                    `}
                  >
                    <Link href="/profile" className="no-underline! block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Profile
                    </Link>
                    <Link href="/orders" className="no-underline! block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Orders
                    </Link>
                    <button 
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={handleLogoutUser}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )
            }
            {
              !data && (
                <button className="no-underline! text-white md:p-2" id={style.loginItem} type="button" onClick={handleClickLogin}>Login</button>
              )
            }

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
