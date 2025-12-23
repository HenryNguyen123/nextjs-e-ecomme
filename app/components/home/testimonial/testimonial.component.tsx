import TitlePage from "@/app/components/content/page/TitlePage.component"

const titlePage = {
    heading: 'TESTIMONIAL',
    title: 'What Our Clients Say About Us',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}

const TestimonialHome:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60">
                <div>
                    <TitlePage context={titlePage} />
                </div>
            </div>
        
        </>
    )
}
export default TestimonialHome