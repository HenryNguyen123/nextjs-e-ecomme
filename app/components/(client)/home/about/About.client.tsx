'use client'
import LoadFetch from '@/app/components/(client)/waitLoading/loading/Loading.component'
import dynamic from 'next/dynamic'

const AboutItem = dynamic(
  () => import('./ItemAbout.component'),
  {
    ssr: false,
    loading: () => <LoadFetch/>,
  }
)
export default function AboutItemClient() {
  return <AboutItem/>
}