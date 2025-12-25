'use client'
import Image from 'next/image';
import style from './about.module.scss'
import { useState } from "react";

const ItemAbout:React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabContents = [
    {
        title: "About Us",
        heading: "Built-with Latest Tools and Technologies",
        content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim.",
        "In ac lectus vel orci accumsan ultricies at in libero accumsan.",
        "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla."
        ],
        image: "/images/test/bg1.jpg"
    },
    {
        title: "Our Mission",
        heading: "Our Mission & Core Values",
        content: [
        "Our mission is to deliver high-quality digital products.",
        "We focus on performance, scalability, and user experience.",
        "Building long-term value for our clients is our priority."
        ],
        image: "/images/test/bg2.png"
    },
    {
        title: "Our Vision",
        heading: "Our Vision for the Future",
        content: [
        "To become a trusted technology partner worldwide.",
        "Innovating continuously with modern technologies.",
        "Empowering businesses through digital transformation."
        ],
        image: "/images/test/bg3.jfif"
    }
    ];

    return(
        <>
            <div className="mt-20">
                <ul className="flex justify-between">
                    {
                        tabContents && tabContents.map((value, index) => (
                            <li 
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    ${style.titleTextAbout} w-1/3 text-center py-5 cursor-pointer transition-all duration-300
                                    ${activeTab === index ? `${style.itemAboutText} font-semibold` : 'text-gray-500 border-transparent hover:text-blue-600'}
                                `}
                            >
                                {value.title}
                            </li>

                        ))
                    }
                </ul>
                <div className='mt-20'>
                    <div className='flex flex-col md:flex-row'>
                        <div className={`${style.mgCenter} w-full lg:w-3/6 px-3 pr-5 flex flex-col `}>
                            <h4 className='text-xl font-bold md:text-5xl'>
                                {tabContents[activeTab].heading}
                            </h4>
                            {
                                tabContents[activeTab].content.map((value, index)=>(
                                    <p
                                        key={index}
                                        className='mt-5 text-sm'
                                    >
                                        {value}
                                    </p>
                                ))
                            }
                        </div>
                        <div className='w-full mt-5 p-3 lg:w-3/6'>
                            <Image
                                src={tabContents[activeTab].image}
                                width={1260}
                                height={100}
                                alt=''
                                className='w-fill'
                            />
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ItemAbout