'use client'

import Image from "next/image"
import { useState } from "react"
import style from './testimonial.module.scss'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Link from "next/link";
import { itemDataTestimonials } from '../../../../public/typescript/home/data'

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0)

  const next = () =>
    setCurrent((prev) => (prev + 1) % itemDataTestimonials.length)

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? itemDataTestimonials.length - 1 : prev - 1
    )

  return (
    <div className="w-full flex justify-center flex-col">
        <div className="flex justify-center">
            <div className={`${style.backgroundTestimonial} max-w-7xl relative py-10 px-0 md:px-18`}>

                {/* slider */}
                <div className="flex gap-12 items-center flex-col md:flex-row">
                <div className="w-1/2">
                    <p className="text-sm md:text-xl opacity-71">{itemDataTestimonials[current].desc}</p>
                    <h4 className="font-bold text-sm md:text-xl my-4 ">
                    {itemDataTestimonials[current].fullName}
                    </h4>
                    <p className="text-sm nd:text-xl opacity-71">{'"' + itemDataTestimonials[current].time + '"'}</p>
                </div>

                <div className="w-1/2">
                    <Image
                    src={itemDataTestimonials[current].image}
                    width={600}
                    height={600}
                    alt=""
                    className="rounded-xl"
                    />
                </div>
                </div>

                {/* Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-2">
                <button onClick={prev} className={style.buttonBg}><FaChevronLeft/></button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-2">
                <button onClick={next} className={style.buttonBg}><FaChevronRight/></button>
                </div>
            </div>
        </div>

        <div className="mt-20 flex justify-center">
            <div className="lg:max-w-7xl px-3 md:px-0">
                <div>
                    <h1 className="text-2xl md:text-5xl text-center">
                        <strong>
                            Trusted by Global Brands
                        </strong>
                    </h1>
                    <p className="mt-4 text-center max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum aspernatur labore repellendus minus dicta ratione temporibus qui? Unde delectus maiores quos laudantium aspernatur dolorum corrupti, repudiandae illum veniam repellat, doloremque quisquam mollitia voluptatem. Unde quisquam magnam id sed vitae.
                    </p>
                </div>

            </div>
        </div>
        <div className="flex justify-center">
            <div className="mt-20 flex justify-between lg:max-w-7xl flex-row max-w-xl md:max-w-7xl flex-wrap">
                <Link href={`#`}>
                    <div className="flex mx-3">
                        <span><FaReact className={`${style.colorIcon} text-5xl dark:text-white`}/></span>
                        <h1 className="flex items-center ml-3 text-20 lg:text-3xl font-bold"><strong>REACT</strong></h1>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex mx-3">
                        <span><RiNextjsFill className={`${style.colorIcon} text-5xl dark:text-white`}/></span>
                        <h1 className="flex items-center ml-3  text-20 lg:text-3xl font-bold"><strong>NEXTJS</strong></h1>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex mx-3 mt-5 md:mt-0">
                        <span><SiNestjs className={`${style.colorIcon} text-5xl dark:text-white`}/></span>
                        <h1 className="flex items-center ml-3  text-20 lg:text-3xl font-bold"><strong>NESTJS</strong></h1>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex mx-3 mt-5 md:mt-0">
                        <span><RiTailwindCssFill className={`${style.colorIcon} text-5xl dark:text-white`}/></span>
                        <h1 className="flex items-center ml-3 text-20 lg:text-3xl font-bold"><strong>TAILWIN</strong></h1>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSlider
