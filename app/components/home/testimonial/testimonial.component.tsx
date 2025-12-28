import TitlePage from "@/app/components/content/page/TitlePage.component"
import ItemTestimonial from "@/app/components/home/testimonial/ItemTestimonial.component"
import { dataTestimonial } from '../../../../public/typescript/home/data'
// import TestimonialItemClient from "@/app/components/home/testimonial/Testimonial.client"

const TestimonialHome:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60">
                <div>
                    {/* title */}
                    <TitlePage context={dataTestimonial} />

                    {/* content */}
                    <ItemTestimonial/>
                    {/* <TestimonialItemClient/> */}
                </div>
            </div>
        
        </>
    )
}
export default TestimonialHome