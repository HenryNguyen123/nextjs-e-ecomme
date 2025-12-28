import React from "react"
import Background from "@/app/components/home/background/Background.component"
import AboutHome from "@/app/components/home/about/AboutHome.component"
import BlogHome from "@/app/components/home/blog/Blog.component"
import FeatureComponent from "@/app/components/home/feature/Feature.component"
import OurHome from "@/app/components/home/our/OurHome.component"
import PortfolioComponent from "@/app/components/home/portfolio/Portfolio.component"
import PricingHome from "@/app/components/home/pricing/Pricing.component"
import SupportComponent from "@/app/components/home/support/Support.component"
import TestimonialHome from "@/app/components/home/testimonial/testimonial.component"
// import HomeClient from "@/app/components/home/HomeClient.client"

const HomeComponent: React.FC = () => {
    
    return(
        <>
            <div className="mt-16 w-full">
                <div className="">
                    <Background/>
                    <FeatureComponent/>
                    <AboutHome/>
                    <OurHome/>
                    <PortfolioComponent/>
                    <TestimonialHome/>
                    <PricingHome/>
                    <BlogHome/>
                    <SupportComponent/>
                    {/* <HomeClient/> */}
                </div>
            </div>
        </>
    )
}
export default HomeComponent