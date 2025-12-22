import ItemAbout from "@/app/components/home/about/ItemAbout.component"

const AboutHome:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60">
                <div className="flex justify-center p-2">
                    <div className="w-full lg:max-w-7xl">
                        <div className="w-full">
                            <div className="relative group flex justify-center">
                                <h1 className="relative z-50 text-2xl font-bold max-w-2xl text-center md:text-5xl">
                                    Know Details About Our Company adasd
                                </h1>
                                <span className="
                                    absolute -top-32 inset-0 flex items-center justify-center
                                    text-8xl font-extrabold uppercase
                                    text-gray-600 text-primary
                                    opacity-10
                                    transition-all duration-300
                                    md:text-9xl md:-top-40
                                    "
                                >
                                    About
                                </span>
                            </div>
                            <div className="flex justify-center">
                                <p className="mt-5 max-w-2xl text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
                                </p>

                            </div>
                        </div>

                        <div className="w-full">
                            <ItemAbout/>
                        </div>
                    </div>
                </div>

            </div>
        
        </>
    )
}
export default AboutHome