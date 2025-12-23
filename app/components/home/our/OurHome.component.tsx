import TitlePage from "@/app/components/content/page/TitlePage.component"
import ItemOur from "@/app/components/home/our/ItemOur.component"

const titlePage = {
  heading: 'Our',
  title: 'Meet With Our Creative Dedicated Team',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}
const OurHome:React.FC = () => {

    return(
        <>
            <div className="w-full">
                <div className="mt-60 px-3">
                    {/* title */}
                    <TitlePage context={titlePage} />

                    <div className="flex justify-center mt-20">
                        <ItemOur/>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default OurHome