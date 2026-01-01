import TitlePage from "@/app/components/(client)/content/page/TitlePage.component"
import ItemOur from "@/app/components/(client)/home/our/ItemOur.component"
import { dataOur } from '../../../../../public/typescript/home/data'

const OurHome:React.FC = () => {

    return(
        <>
            <div className="w-full">
                <div className="mt-60 px-3">
                    {/* title */}
                    <TitlePage context={dataOur} />

                    <div className="flex justify-center mt-20">
                        <ItemOur/>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default OurHome