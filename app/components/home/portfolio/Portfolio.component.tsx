import TitlePage from "@/app/components/content/page/TitlePage.component"
import ItemPortfolio from "@/app/components/home/portfolio/ItemPortfolio.component"


const titlePage = {
heading: 'PORTFOLIO',
title: 'Gallery, Previews and Portfolio',
desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}

const PortfolioComponent:React.FC = () => {

    return(
        <>
            <div className="w-full">
                <div className="flex justify-center mt-60">
                    <div className="lg:max-w-7xl">
                        {/* title */}
                        <TitlePage context={titlePage} />

                        {/* context */}
                        <ItemPortfolio/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PortfolioComponent