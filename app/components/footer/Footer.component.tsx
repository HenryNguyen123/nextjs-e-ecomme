import Image from "next/image"
import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const Footer: React.FC = () => {

    return(
        <>
            <div className="w-full my-30 flex justify-center">
                <div className="max-w-7xl min-w-7xl">
                    <div className="">
                        <div className="flex ">
                            <Image
                            src='/images/logo/website/logoIndex.png'
                            alt="avatar"
                            width={45}
                            height={45}
                            className='mr-1'
                            />
                            <p className="pt-2  text-2xl font-bold text-black dark:text-white no-underline!">
                                MinhNhatShop
                            </p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="flex">
                            <FaFacebook className="text-3xl text-blue-600"/>
                            <FaInstagramSquare className="mx-1 text-3xl text-rose-400"/>
                            <FaSquareThreads className="text-3xl"/>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="w-full flex-1">
                            <ul>
                                <li className="text-bold text-2xl">MinhNhat Shop</li>
                                <li className="mt-2">Home</li>
                                <li>Products</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul>
                                <li className="text-bold text-2xl">Support</li>
                                <li className="mt-2">Company</li>
                                <li>Our Blog</li>
                                <li>Account</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul>
                                <li className="text-bold text-2xl">Get in touch</li>
                                <li className="mt-2">Toll Free Customer Care</li>
                                <li>+84 123456789</li>
                                <li className="mt-2">Need live support?</li>
                                <li>nhokkudo143@gmail.com</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul>
                                <li className="text-bold text-2xl">Newsletter</li>
                                <li className="mt-2">Subscribe to receive future updates</li>
                                <li>
                                    <input type="text" placeholder="Subscribe .." className="mt-1 border-2 px-4 py-1 bd-10"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer