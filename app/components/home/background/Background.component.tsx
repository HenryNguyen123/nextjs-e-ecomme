import Image from "next/image"
import style from './backgroundCss.module.scss'

const Background:React.FC = () => {

    return(
        <>
            <div className={`${style.backgroundModule}`}>
                <div className="flex justify-center dark:bg-black">
                    <div className="max-w-7xl min-w-7xl flex justify-between my-19 md:min-w-7xl lg:min-w-7xl">
                        <div className="flex-1 mt-20">
                            <h1>Next.js Boilerplate for Your Busi|</h1>
                            <p className="my-19">
                                Handcrafted Next.js starter for your next - Startup, Business, Agency or SaaS Website. 
                                Comes with refreshing design, integrations and everything you need to kickstart your next web project.
                            </p>
                            <button className="px-10 py-2 border-2 bg-amber-300">
                                click me now ---
                            </button>
                        </div>
                        <div className="flex-2 ml-10">
                            <Image
                                src='/images/test/backgroundtest1.png'
                                alt="background"
                                width={1280}
                                height={400}
                                className='min-w-8xl max-w-12/12 max-h-12/12 min-h-12/12'
                              />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background