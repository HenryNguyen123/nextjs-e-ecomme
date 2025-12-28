'use client'

import dynamic from 'next/dynamic'

const OurHome = dynamic(
  () => import('@/app/components/home/our/OurHome.component'),
  {
    ssr: false,
    loading: () => null,
  }
)

export default function HomeClient() {
  return <OurHome />
}
