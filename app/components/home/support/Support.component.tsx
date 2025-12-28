import TitlePage from "@/app/components/content/page/TitlePage.component"
import { dataSupport } from '../../../../public/typescript/home/data'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { BsThreads } from "react-icons/bs";

import Link from "next/link";
import ItemSupport from "@/app/components/home/support/ItemSupport.component";

const SupportComponent:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60 flex justify-center">
                <div className="lg:max-w-7xl ">
                    <div className="flex -center flex-col md:flex-row flex-wrap">
                        <div>
                            <TitlePage context={dataSupport}/>
                        </div>
                        <div className="flex ml-10 flex-col md:flex-row">
                            <h1 className="text-2xl ml-0 opacity-70 mb-10 md:mb-0"><strong>info@minhnhatshop.io.vn</strong></h1>
                        </div>
                    </div>
                    <div className="opacity-70">
                        <div className="border-t-2 mb-10 opacity-70"></div>
                    </div>
                    <div className="flex justify-center w-full items-center flex-col md:flex-row md:justify-between">
                        <div className="mt-4 md:mt-0 w-full text-center">
                            <h2 className="text-xl font-bold">Email Address</h2>
                            <p className="opacity-80 mt-1">support@minhnhatshop.io.vn</p>
                        </div>
                        <div className="mt-4 md:mt-0 w-full text-center">
                            <h2 className="text-xl font-bold w-full">Phone Number</h2>
                            <p className="opacity-80 mt-1">+84 123456789</p>
                        </div>
                        <div className="mt-4 md:mt-0 w-full text-center">
                            <h2 className="text-xl font-bold">Office Location</h2>
                            <p className="opacity-80 mt-1">Tp Hcm</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-blue-500 p-1 text-xl hover:scale-125">
                                <Link href={``}><FaFacebookF/></Link>
                            </span>
                            <span className="text-pink-400 p-1 text-2xl hover:scale-125">
                                <Link href={``}><FaInstagram/></Link>
                            </span>
                            <span className="text-blue-500 p-1 text-4xl hover:scale-125">
                                <Link href={``}><SiZalo/></Link>
                            </span>
                            <span className=" p-1 text-xl hover:scale-125">
                                <Link href={``}><BsThreads/></Link>
                            </span>
                        </div>
                    </div>

                    {/* form */}
                    <div className="flex justify-center mt-20">
                        <ItemSupport/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SupportComponent