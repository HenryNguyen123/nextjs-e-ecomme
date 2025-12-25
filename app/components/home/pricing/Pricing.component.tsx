import TitlePage from "@/app/components/content/page/TitlePage.component"
import ItemPricing from "@/app/components/home/pricing/ItemPricing.component"
const titlePage = {
    heading: 'PRICING',
    title: 'Affordable Pricing With Simple Plans',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
const PricingHome:React.FC = () => {

    return(
        <>
            <div className="w-full mt-30 ">
                <div className="flex justify-center">
                    <div className="lg:max-w-7xl border-t-2 pt-30">
                        <div className="flex justify-center ">
                            <TitlePage context={titlePage}/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="max-w-7xl">
                        <ItemPricing/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PricingHome