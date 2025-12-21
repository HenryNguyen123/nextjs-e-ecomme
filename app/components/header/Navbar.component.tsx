"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Navbar.module.scss";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/stores/stores.redux";
import { getLogin } from "../../redux/slices/account/account.slice";
import type { UserData } from "../../redux/slices/account/account.slice";
import { logoutAuthentication } from "../../redux/slices/auth/logout.slice";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import ThemeToggle from "@/app/components/themeToggle/ThemeToggle.component";

export default function NavbarComponent() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const data: UserData | null = useSelector(
    (state: RootState) => state.account.data
  );

  const handleCallAuthen = async () => {
    try {
      await dispatch(getLogin());
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogoutUser = async () => {
    try {
      const pathPage = window.location.pathname;
      const res = await dispatch(logoutAuthentication(pathPage)).unwrap();
      if (res?.EC === 0 && res?.DT?.path) {
        router.push(res.DT.path);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickLogin = () => {
    router.push("/clients/auth/login");
  };

  useEffect(() => {
    handleCallAuthen();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const avatarSrc =
    data?.data?.avatar
      ? data.data.loginBy === "OAUTH"
        ? data.data.avatar
        : `${process.env.NEXT_PUBLIC_SERVER_URL}${data.data.avatar}`
      : "/images/users/avatar/avatar_anonymous.png";

  return (
    <nav
      className={`${style.navbarContainer} fixed top-0 left-0 w-full z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 dark:bg-black ">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex justify-center no-underline!"
          >
            <Image
              src='/images/logo/website/logoIndex.png'
              alt="avatar"
              width={45}
              height={45}
              className=''
            />
            <p className={`text-primary pt-2  text-2xl font-bold text-black `}>
              <strong>MinhNhatShop</strong>
            </p>
          </Link>

          {/* Search Desktop */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <input
              type="text"
              className="w-full max-w-md px-4 py-2 rounded-full text-black bg-gray-100 dark:text-black dark:bg-gray-800 outline-none"
              placeholder="Search products..."
            />
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark mode */}
            <div>
              <ThemeToggle/>
            </div>

            {/* Cart */}
            <Link href="#" className="relative text-2xl no-underline!">
              <FaShoppingCart className="text-2xl text-gray-600 text-primary"/>
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
                0
              </span>
            </Link>

            {/* User */}
            {data ? (
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Image
                  src={avatarSrc}
                  alt="avatar"
                  width={40}
                  height={40}
                  className={`${style.avatar} mb-1`}
                />
                <div
                  className={`${style.dropdown} absolute right-0 bg-white dark:bg-gray-800 border dark:border-gray-700 ${
                    dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                > 
                  <div className={`${style.accountTitle}`}>
                    <div className="flex justify-center">
                      <Image
                        src={avatarSrc}
                        alt="avatar"
                        width={48}
                        height={48}
                        className={`${style.mobileProfileAvatar}`}
                      />
                    </div>
                    <span className={`${style.accountRole}`}>{data.data.roleCode === 'USER' ? "Member" : data.data.roleCode }</span>
                    <span className="w-full flex justify-center">{`Hi! ${data.data.lastName} ${data.data.firstName}`}</span>
                    {/* <span className="w-full flex justify-center">{data.data.userName}</span> */}
                  </div>
                  <div className="my-2 w-full flex justify-between">
                    <Link href="#" className={style.dropdownItem}>
                      Profile
                    </Link>
                    <Link href="#" className={style.dropdownItem}>
                      Orders
                    </Link>
                  </div>
                  <button
                    onClick={handleLogoutUser}
                    id={style.button}
                    className={`${style.dropdownItem} w-full flex justify-center text-left`}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                id={style.loginItem}
                onClick={handleClickLogin}
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle/>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <AiOutlineClose className="text-2xl"/> : <IoMenu className="text-2xl"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`${style.mobileMenu} md:hidden bg-white dark:bg-gray-900`}>
          <div className="p-4">
            <input
              className="w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 outline-none"
              placeholder="Search..."
            />
          </div>

          {data && (
            <div className={style.mobileProfile}>
              <Image
                src={avatarSrc}
                alt="avatar"
                width={48}
                height={48}
                className={style.mobileProfileAvatar}
              />
              <div>
                <div className={style.mobileProfileName}>
                  {data.data.firstName} {data.data.lastName}
                </div>
                <div className={style.mobileProfileRole}>
                  {data.data.loginBy === "OAUTH"
                    ? "Google Account"
                    : "Member"}
                </div>
              </div>
            </div>
          )}
          <div>
            <div>
              <Link href="/" className={style.dropdownItem}>
                Home
              </Link>
              <Link href="/products" className={style.dropdownItem}>
                Products
              </Link>
            </div>
            <div className={style.mobileFlex}>
              {!data && (
                <button
                  id={style.loginItemMobile}
                  className="w-full m-4"
                  onClick={handleClickLogin}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>


          {data && (
            <button
              onClick={handleLogoutUser}
              className={`${style.dropdownItem} w-full flex justify-center`}
            >
              <span>Logout</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
