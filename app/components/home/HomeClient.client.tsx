'use client'

import dynamic from 'next/dynamic'
import LoadFetch from "@/app/components/waitLoading/loading/Loading.component"
import FeatureComponent from '@/app/components/home/feature/Feature.component'
import OurHome from '@/app/components/home/our/OurHome.component'
import PricingHome from '@/app/components/home/pricing/Pricing.component'
import BlogHome from '@/app/components/home/blog/Blog.component'
import SupportComponent from '@/app/components/home/support/Support.component'

const AboutHome = dynamic(
  () => import('@/app/components/home/about/AboutHome.component'),
  {
    ssr: false,
    loading: () => <LoadFetch/>,
  }
)
const PortfolioHome = dynamic(
  () => import('@/app/components/home/portfolio/Portfolio.component'),
  {
    ssr: false,
    loading: () => <LoadFetch/>,
  }
)
const TestimonialHome = dynamic(
  () => import('@/app/components/home/testimonial/testimonial.component'),
  {
    ssr: false,
    loading: () => <LoadFetch/>,
  }
)

export default function HomeClient() {
  return(
    <>
      <FeatureComponent/>

      {/* hook */}
      <AboutHome/>

      <OurHome/>

      {/* hook */}
      <PortfolioHome/>

      {/* hook */}
      <TestimonialHome/>

      <PricingHome/>
      <BlogHome/>
      <SupportComponent/>
    </>
  )
}
