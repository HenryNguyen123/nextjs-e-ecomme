'use client'
import LoadFetch from '@/app/components/(client)/waitLoading/loading/Loading.component'
import dynamic from 'next/dynamic'

const PorfolioItem = dynamic(
  () => import('./ItemPortfolio.component'),
  {
    ssr: false,
    loading: () => <LoadFetch/>,
  }
)
export default function PorfolioItemClient() {
  return <PorfolioItem/>
}