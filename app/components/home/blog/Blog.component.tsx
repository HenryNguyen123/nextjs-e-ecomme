import TitlePage from "@/app/components/content/page/TitlePage.component"
import ItemBlogHome from "@/app/components/home/blog/ItemBlogHome.component"
import { dataBlog } from '../../../../public/typescript/home/data'

const BlogHome:React.FC = () => {

    return(
        <>
            <div className="w-full mt-60 flex justify-center">
                <div className="lg:max-w-7xl">
                    <div>
                        <TitlePage context={dataBlog} />
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