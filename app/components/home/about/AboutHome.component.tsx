import TitlePage from "@/app/components/content/page/TitlePage.component"
import ItemAbout from "@/app/components/home/about/ItemAbout.component"

const titlePage = {
heading: 'About',
title: 'Know Details About Our Company',
desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
const AboutHome:React.FC = () => {
    return(
        <>
            <div className="w-full mt-60">
                <div className="flex justify-center p-2">
                    <div className="w-full lg:max-w-7xl">
                        {/* title */}
                        <TitlePage context={titlePage} />    

                        <div className="w-full">
                            <ItemAbout/>
                        </div>
                    </div>
                </div>

            </div>
        
        </>
    )
}
export default AboutHome