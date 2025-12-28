import Image from "next/image"
import Link from "next/link"
import style from './our.module.scss'
import { FaFacebookMessenger } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { itemDataOur } from '../../../../public/typescript/home/data'

const ItemOur:React.FC = () => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer`}>
      {itemDataOur && itemDataOur.map((profile, index) => (
        <div key={index} className="text-center">

          {/* IMAGE + ICON */}
          <div className="group relative max-w-xl mx-auto overflow-hidden">
            {/* <Image
              src={profile.image}
              width={300}
              height={400}
              alt={profile.fullname}
              className="rounded-xl transition-transform duration-500 group-hover:scale-105"
            /> */}
            <div className="relative w-[300px] aspect-[2/1] overflow-hidden rounded-xl group">
              <Image
                src={profile.image}
                fill
                sizes="300px"
                alt={profile.fullname}
                loading="lazy"
                fetchPriority="low"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* ICON OVERLAY */}
            <div
              className="
                absolute inset-0
                flex items-end justify-center gap-4
                pb-6
                bg-black/40
                opacity-100
                group-hover:opacity-100
                transition-opacity duration-300
                md:opacity-0
              "
            >
              <Link href={profile.fb}>
                <FaFacebookMessenger className={`${style.facebookIcon} text-2xl`}/>
              </Link>
              <Link href={profile.ins}>
                <LuInstagram className={`${style.insIcon} text-2xl mx-5`}/>
              </Link>
              <Link href={profile.gg}>
                <FaSquareGooglePlus className={`${style.ggIcon} text-2xl`}/>
              </Link>
            </div>
          </div>

          {/* INFO */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg">
              {profile.fullname}
            </h3>
            <p className="text-gray-500">
              {profile.position}
            </p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default ItemOur