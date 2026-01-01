import TitlePage from "@/app/components/content/page/TitlePage.component"
import {dataNotPound} from '../../../public/typescript/notPoundPage/data'
import styleButton from '../../../public/css/button.module.scss'
import Link from "next/link"
const NotFoundComponent:React.FC = () => {

    return(
        <>
            <div className="w-full">
                <div className="mt-60 px-3">
                    <TitlePage context={dataNotPound} />
                    <div className="flex justify-center w-full -mt-30">
                        <div className="max-w-2xl flex justify-center flex-col">
                            <h2 className="text-4xl font-bold text-center">
                                Sorry, the page can not be found
                            </h2>
                            <p className="text-center mt-2 text-xl opacity-70">
                                The page you were looking for appears to have been moved, deleted or does not exist.
                            </p>
                            <div className="">
                                <Link href={`/`} className="flex justify-center mt-2">
                                    <button className={`${styleButton.buttonPrimary} w-1/4`}>
                                        Back To Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotFoundComponent