'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './portifio.module.scss'

type PortfolioImage = {
  image: string
  productName: string
  link: string
}

type PortfolioContent = {
  heading: string
  images: PortfolioImage[]
}

const contents: PortfolioContent[] = [
  {
    heading: 'All',
    images: [
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 1',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 2',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 3',
        link: '#',
      },
    ],
  },
  {
    heading: 'Brand',
    images: [
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 4',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 5',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 6',
        link: '#',
      },
    ],
  },
  {
    heading: 'Ecommerce',
    images: [
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 7',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 8',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 9',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 10',
        link: '#',
      },
      {
        image: '/images/test/bg1.jpg',
        productName: 'Product 11',
        link: '#',
      },
    ],
  },
]

const ItemPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <section className="w-full">
      {/* TAB */}
      <ul className="flex justify-center mb-16">
        {contents && contents.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              mx-5 cursor-pointer pb-2 border-b-2
              transition-all duration-300
              ${
                activeTab === index
                  ? `${style.itemPortfolioText} font-semibold `
                  : 'border-transparent text-gray-500 hover:text-blue-600'
              }
              ${style.titleTextPortfoliot ?? ''}
            `}
          >
            {item.heading}
          </li>
        ))}
      </ul>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contents[activeTab].images.map((value, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >
              {/* IMAGE */}
              <Image
                src={value.image}
                width={400}
                height={300}
                alt={value.productName}
                className="w-full h-auto object-cover rounded-xl"
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-black/60
                  opacity-100
                  flex flex-col justify-center items-center
                  group-hover:opacity-100 md:opacity-0
                  transition-all duration-300
                "
              >
                <h3 className="text-white text-lg font-semibold mb-1">
                  Portfolio
                </h3>
                <p className="text-white mb-4">
                  {value.productName}
                </p>
                <Link
                  href={value.link}
                  className="
                    px-5 py-2
                    bg-blue-600 text-white rounded-lg
                    hover:bg-blue-700
                    transition-all
                  "
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItemPortfolio
