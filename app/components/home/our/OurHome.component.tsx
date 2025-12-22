import ItemOur from "@/app/components/home/our/ItemOur.component"

const OurHome:React.FC = () => {

    return(
        <>
            <div className="w-full">
                <div className="mt-60 px-3">
                    <div className="w-full flex justify-center flex-col">
                        <div className="relative group flex justify-center">
                            <h1 className="relative z-50 text-2xl font-bold max-w-2xl text-center md:text-5xl">
                            Meet With Our Creative Dedicated Team
                            </h1>
                            <span className="
                                absolute -top-32 inset-0 flex items-center justify-center
                                text-7xl font-extrabold uppercase
                                text-gray-600 text-primary
                                opacity-10
                                transition-all duration-300
                                md:text-9xl md:-top-40
                                "
                            >
                                Our
                            </span>
                        </div>
                        <div className="w-full flex justify-center">
                            <p className="text-gray-600 mt-5 text-center max-w-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-20">
                        <ItemOur/>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default OurHome