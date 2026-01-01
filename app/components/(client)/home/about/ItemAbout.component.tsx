'use client'
import Image from 'next/image';
import style from './about.module.scss'
import { useState } from "react";
import { itemDataAbout } from '../../../../../public/typescript/home/data'

const ItemAbout:React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return(
        <>
            <div className="mt-20">
                <ul className="flex justify-between">
                    {
                        itemDataAbout && itemDataAbout.map((value, index) => (
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
                                {itemDataAbout[activeTab].heading}
                            </h4>
                            {
                                itemDataAbout[activeTab].content.map((value, index)=>(
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
                                src={itemDataAbout[activeTab].image}
                                alt={itemDataAbout[activeTab].title}
                                width={1280}
                                height={600}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={activeTab === 0}
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ItemAbout