import TitlePage from "@/app/components/content/page/TitlePage.component"
// import ItemAbout from "@/app/components/home/about/ItemAbout.component"
import { dataAbout } from '../../../../public/typescript/home/data'
import AboutItemClient from "@/app/components/home/about/About.client"

const AboutHome:React.FC = () => {
    return(
        <>
            <div className="w-full mt-60">
                <div className="flex justify-center p-2">
                    <div className="w-full lg:max-w-7xl">
                        {/* title */}
                        <TitlePage context={dataAbout} />    

                        <div className="w-full">
                            <AboutItemClient/>
                            {/* <ItemAbout/> */}
                        </div>
                    </div>
                </div>

            </div>
        
        </>
    )
}
export default AboutHome