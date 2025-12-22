import AboutHome from "@/app/components/home/about/AboutHome.component"
import Background from "@/app/components/home/background/Background.component"
import FeatureComponent from "@/app/components/home/feature/Feature.component"
import OurHome from "@/app/components/home/our/OurHome.component"
import React from "react"

const HomeComponent: React.FC = () => {
    
    return(
        <>
            <div className="mt-16 w-full">
                <div className="">
                    <Background/>
                    <FeatureComponent/>
                    <AboutHome/>
                    <OurHome/>
                </div>
            </div>
        </>
    )
}
export default HomeComponent