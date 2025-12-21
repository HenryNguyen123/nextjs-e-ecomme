import { IoStatsChart } from "react-icons/io5"
import { IconType } from "react-icons";
import style from "./model.module.scss";
interface ItemStyle {
    title: string;
    desc: string
    icon: IconType
}
interface ContextStyle {
    context: ItemStyle
}
const ItemModel:React.FC<ContextStyle> = ({ context }) => {

    return(
        <>
                <div className={`${style.modelContainer} flex flex-col items-center text-center`}>
                  <div className={style.iconModel}>
                    <span className="text-4xl">
                      <context.icon />
                    </span>
                  </div>

                  <h4 className="text-2xl font-semibold my-3">
                    {context.title}
                  </h4>

                  <p className="">
                    {context.desc}
                  </p>
                </div>
        </>
    )
}
export default ItemModel