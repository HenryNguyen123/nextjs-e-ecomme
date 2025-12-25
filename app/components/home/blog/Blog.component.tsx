import TitlePage from "@/app/components/content/page/TitlePage.component"
import ItemBlogHome from "@/app/components/home/blog/ItemBlogHome.component"
const titlePage = {
heading: 'Blogs',
title: 'Latest News & Articles From Our Blog',
desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.'
}
const BlogHome:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60 flex justify-center">
                <div className="lg:max-w-7xl">
                    <div>
                        <TitlePage context={titlePage} />
                    </div>
                    <div className="w-full">
                        <ItemBlogHome/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogHome