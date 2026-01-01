'use client'
import LoadFetch from '@/app/components/(client)/waitLoading/loading/Loading.component'
import dynamic from 'next/dynamic'

const TestimonialItem = dynamic(
  () => import('./ItemTestimonial.component'),
  {
    ssr: false,
    loading: () => <LoadFetch/>,
  }
)
export default function TestimonialItemClient() {
  return <TestimonialItem/>
}