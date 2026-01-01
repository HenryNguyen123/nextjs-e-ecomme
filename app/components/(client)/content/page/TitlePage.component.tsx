interface TitlePageType {
    heading: string;
    title: string;
    desc: string;
}
interface ContextType{
    context: TitlePageType
}
const TitlePage:React.FC<ContextType> = ({context}) => {

    return(
        <>
          <div className="flex justify-center mb-20 p-3">
            <div className="max-w-2xl text-center">
              <div className="relative group flex justify-centerl">
                <h1 className="relative z-50 text-2xl font-bold max-w-2xl text-center md:text-5xl">
                   <strong>{context.title}</strong>
                </h1>
                <span className="
                    absolute -top-20 inset-0 flex items-center justify-center
                    text-5xl font-extrabold uppercase
                    text-gray-600 text-primary
                    opacity-10
                    transition-all duration-300
                    md:text-8xl md:-top-40 lg:text-9xl
                    "
                    aria-hidden="true"
                > 
                  <strong>{context.heading}</strong>
                </span>

              </div>
              <h2 className="sr-only">
                {context.desc}
              </h2>
              <p className="opacity-80 mt-5">
                {context.desc}
              </p>
            </div>
          </div>
        </>
    )
} 
export default TitlePage