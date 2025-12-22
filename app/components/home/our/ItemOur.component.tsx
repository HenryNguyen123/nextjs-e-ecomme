import Image from "next/image"
import Link from "next/link"
import style from './our.module.scss'

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
          <div className="group relative w-[300px] mx-auto overflow-hidden">
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
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <Link href={profile.fb}>
                <span className={style.iconHover}>fb</span>
              </Link>
              <Link href={profile.ins}>
                <span className={style.iconHover}>ins</span>
              </Link>
              <Link href={profile.gg}>
                <span className={style.iconHover}>gg</span>
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