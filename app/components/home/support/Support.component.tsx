import TitlePage from "@/app/components/content/page/TitlePage.component"
const titlePage = {
    heading: 'Support',
    title: 'Need Any Help? Say hello',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
const SupportComponent:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60">
                <div>
                    <div className="flex justify-center">
                        <TitlePage context={titlePage}/>
                        <div className="flex ml-10">
                            <p>
                                <span className="w-5 border-b-2">...............</span>
                            </p>
                            <h1 className="text-2xl ml-10"><strong>info@minhnhatshop.io.vn</strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SupportComponent