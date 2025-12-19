import Image from "next/image"
import Link from "next/link";
import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const Footer: React.FC = () => {

    return(
        <>
            <div className="w-full my-30 flex justify-center dark:bg-black">
                <div className="max-w-7xl min-w-7xl">
                    <div className="flex justify-between mt-4">
                    <div className="flex-1">
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
                        <div className="flex">
                            <FaFacebook className="text-3xl text-blue-600 cursor-pointer"/>
                            <FaInstagramSquare className="mx-1 text-3xl text-rose-400 cursor-pointer"/>
                            <FaSquareThreads className="text-3xl cursor-pointer"/>
                        </div>
                    </div>
                        <div className="w-full flex-1">
                            <h4>MinhNhat Shop</h4>
                            <div>
                                <Link href="#" className="text-black no-underline!">Home</Link>
                                <br/>
                                <Link href="#" className="text-black no-underline!">Products</Link>
                                <br/>
                                <Link href="#" className="text-black no-underline!">Blogs</Link>
                                <br/>
                                <Link href="#" className="text-black no-underline!">About</Link>
                                <br/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4>Support</h4>
                            <div>
                                <Link href="#" className="text-black no-underline!">Company</Link>
                                <br/>
                                <Link href="#" className="text-black no-underline!">Accout</Link>
                                <br/>
                                <Link href="#" className="text-black no-underline!">Blogs</Link>
                                <br/>
                                <Link href="#" className="text-black no-underline!">About</Link>
                                <br/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4>Get in touch</h4>
                            <div>
                                <span className="text-black">Toll Free Customer Care</span>
                                <br/>
                                <span className="text-black">+84 123456789</span>
                                <br/>
                                <span className="text-black">Need live support?</span>
                                <br/>
                                <span className="text-black">nhokkudo143@gmail.com</span>
                                <br/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4>Newsletter</h4>
                            <div>
                                <span className="text-black">Subscribe to receive future updates</span>
                                <br/>
                                <input type="text" placeholder="Subscribe .." className="mt-1 border-2 px-4 py-1 bd-10"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer