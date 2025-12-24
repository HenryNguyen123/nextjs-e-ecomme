import Image from "next/image"
import Link from "next/link"
import style from './our.module.scss'
import { FaFacebookMessenger } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaSquareGooglePlus } from "react-icons/fa6";
const ItemOur:React.FC = () => {
    const profiles = [
    {
        image: "/images/test/bg1.jpg",
        fullname: "Olivia Andrium",
        position: "Project Manager",
        fb: "#",
        ins: "#",
        gg: "#",
    },
    {
        image: "/images/test/bg1.jpg",
        fullname: "James Walker",
        position: "UI/UX Designer",
        fb: "#",
        ins: "#",
        gg: "#",
    },
    {
        image: "/images/test/bg1.jpg",
        fullname: "Sophia Lee",
        position: "Frontend Developer",
        fb: "#",
        ins: "#",
        gg: "#",
    },
    ];

    return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer`}>
      {profiles.map((profile, index) => (
        <div key={index} className="text-center">

          {/* IMAGE + ICON */}
          <div className="group relative max-w-xl mx-auto overflow-hidden">
            <Image
              src={profile.image}
              width={300}
              height={400}
              alt={profile.fullname}
              className="rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

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