import Image from "next/image"
import Link from "next/link"
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import style from './bloghome.module.scss'
import { itemDataBlogs } from '../../../../../public/typescript/home/data'

const ItemBlogHome:React.FC = () => {
    
    return(
        <>
            <div className="flex justify-around flex-col md:flex-row px-3">
                {
                    itemDataBlogs && itemDataBlogs.map((value, index) => (
                        <div key={index} className={`${style.blogHomeContainer} w-full md:w-1/3 mt-5 md:mt-0 cursor-pointer`}>
                            <div className={style.imageWrapper}>
                                <Image
                                    src={value.image}
                                    width={300}
                                    height={300}
                                    alt=""
                                    className={`${style.imageBlog}`}
                                />
                            </div>
                            <div className="mt-5 opacity-80">
                                <p className="flex">
                                    <span className="flex items-center"><MdOutlineAccountCircle/></span>
                                    <span className="ml-1 mr-5">{value.fullname}</span>
                                    <span className="flex items-center"><CiCalendar/></span>
                                    <span className="ml-1">{value.time}</span>
                                </p>
                            </div>
                            <h1 className="titleBlog">
                                <Link href={``}>
                                    <strong className="text-sm md:text-2xl">{value.title}</strong>
                                </Link>
                            </h1>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ItemBlogHome