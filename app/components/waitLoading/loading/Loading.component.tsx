import style from './loading.module.scss'
const LoadFetch:React.FC =  () => {

    return(
        <>
            <div>
                <div className={`${style.loadContent} min-h-30 flex items-center justify-center`}>
                    <div className="animate-spin rounded-full h-8 w-8 border-t-3 border-blue-600 border-b-3"></div>
                    <span className="ml-1">Loading ...</span>
                </div>
            </div>
        </>
    )
}

export default LoadFetch