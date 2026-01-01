import TitlePage from "@/app/components/(client)/content/page/TitlePage.component"
import { dataSupport } from '../../../../../public/typescript/home/data'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { BsThreads } from "react-icons/bs";

import Link from "next/link";
import ItemSupport from "@/app/components/(client)/home/support/ItemSupport.component";

const SupportComponent:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60 flex justify-center">
                <div className="lg:max-w-7xl ">
                    <div className="flex justify-between flex-col md:flex-row md:flex-wrap md:justify-center">
                        <div>
                            <TitlePage context={dataSupport}/>
                        </div>
                        <div className="flex flex-col items-center md:items-start md:flex-row md:ml-10">
                            <p className="text-2xl opacity-70 mb-10 md:mb-0 text-center md:text-left">
                                <strong>info@minhnhatshop.io.vn</strong>
                            </p>
                        </div>
                    </div>
                    <div className="opacity-70">
                        <div className="border-t-2 mb-10 opacity-70"></div>
                    </div>
                    <div className="flex justify-center w-full items-center flex-col p-3 md:flex-row md:justify-between">
                        <div className="mt-4 md:mt-0 w-full text-center md:text-left">
                            <h2 className="text-xl font-bold">Email Address</h2>
                            <p className="opacity-80 mt-1">support@minhnhatshop.io.vn</p>
                        </div>
                        <div className="mt-4 md:mt-0 w-full text-center md:text-left">
                            <h2 className="text-xl font-bold w-full">Phone Number</h2>
                            <p className="opacity-80 mt-1">+84 123456789</p>
                        </div>
                        <div className="mt-4 md:mt-0 w-full text-center md:text-left">
                            <h2 className="text-xl font-bold">Office Location</h2>
                            <p className="opacity-80 mt-1">Tp Hcm</p>
                        </div>
                        <div className="flex items-center md:text-left">
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