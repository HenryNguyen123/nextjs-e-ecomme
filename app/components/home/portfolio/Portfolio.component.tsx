import TitlePage from "@/app/components/content/page/TitlePage.component"
// import ItemPortfolio from "@/app/components/home/portfolio/ItemPortfolio.component"
import { dataPortpolio } from '../../../../public/typescript/home/data'
import PorfolioItemClient from "@/app/components/home/portfolio/Portfolio.client"

const PortfolioComponent:React.FC = () => {

    return(
        <>
            <div className="w-full">
                <div className="flex justify-center mt-60">
                    <div className="lg:max-w-7xl">
                        {/* title */}
                        <TitlePage context={dataPortpolio} />

                        {/* context */}
                        {/* <ItemPortfolio/> */}
                        <PorfolioItemClient/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PortfolioComponent