import Image from "next/image";
import style from "./backgroundCss.module.scss";
import styleButton from "../../../../public/css/button.module.scss";

const Background: React.FC = () => {
  return (
    <div className={`${style.backgroundModule} w-full`}>
    {/* <div className={`w-full`}> */}
      
      {/* FULL WIDTH */}
      <div className="w-full px-4 py-16 flex justify-center">
        
        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:max-w-7xl">
          
          {/* LEFT */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold">
              Next.js Boilerplate for Your Business
            </h1>

            <p className="my-6 text-base md:text-lg">
              Handcrafted Next.js starter for your next Startup, Business,
              Agency or SaaS Website. Comes with refreshing design,
              integrations and everything you need to kickstart your next web
              project.
            </p>

            <button className={`${styleButton.buttonPrimary} text-2xl`}>
              Click me now
            </button>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-2/3">
            <div className="relative w-full aspect-[16/9]">

              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/test/backgroundIT.png"
                  alt="background back"
                  fill
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 475px"
                  className="" //tao bo tron vien cho hinh
                  priority
                />
              </div>

              <div
                className="
                  absolute
                  z-20
                  left-0 bottom-0
                  w-[calc(80%+30px)]
                  h-[calc(80%+30px)]
                  bg-black/30
                  backdrop-blur-md
                  rounded-xl
                "
              />

              {/* TẤM ĐẦU – GÓC TRÁI DƯỚI */}
              <div
                className="
                  absolute
                  z-30
                  left-0 bottom-0
                  w-4/5
                  h-4/5
                "
              >
                <Image
                  src="/images/test/backgroundIT.png"
                  alt="background front"
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                />
              </div>

            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Background;
