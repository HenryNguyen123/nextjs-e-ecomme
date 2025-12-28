import TitlePage from "@/app/components/content/page/TitlePage.component"
import { dataSupport } from '../../../../public/typescript/home/data'

const SupportComponent:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60">
                <div>
                    <div className="flex justify-center flex-col md:flex-row flex-wrap">
                        <div>
                            <TitlePage context={dataSupport}/>
                        </div>
                        <div className="flex ml-10 flex-col md:flex-row">
                            <p>
                                {/* <span className="w-5 border-b-2">...............</span> */}
                            </p>
                            <h1 className="text-2xl ml-0 md:ml-10"><strong>info@minhnhatshop.io.vn</strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SupportComponent