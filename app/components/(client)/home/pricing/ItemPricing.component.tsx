import style from './pricing.module.scss'
import styleButton from '@/app/styles/button.module.scss'
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { itemDataPricing } from '../../../../../public/typescript/home/data'

const ItemPricing:React.FC = () =>  {

  return(
    <>
      <div className="flex justify-center flex-col md:flex-row flex-wrap">
          {
              itemDataPricing && itemDataPricing.map((value, index) => (
                  <div key={index} className="px-3 mt-5 md:w-1/3">
                      <div className="w-auto">
                          <div className={style.boderPricing}>
                              <h3 className="text-center text-3xl"><strong>{value.title}</strong></h3>
                              <p className="text-center mt-1 opacity-80">{value.subtitle}</p>
                          </div>
                          <div className={style.boderPricing}>
                              <div className="text-center">
                                  <span className="font-bold text-5xl">{value.price}</span> 
                                  <p>
                                      <span className="font-bold">{value.currency}</span> 
                                      <span className="font-bold">{value.duration}</span>
                                  </p>
                              </div>
                              <p className="text-center mt-1 opacity-80">
                                  {value.description}
                              </p>
                          </div>
                          <div className={`${style.boderPricing} h-4xl`}>
                              {
                                  value.features.map((item, curren)=>(
                                      <p key={curren} className={item.active ? 'flex mt-2' : "flex mt-2 opacity-80"}>
                                          <span><TiTick className={item.active ? 'text-emerald-500 text-2xl' : "text-2xl"}/></span>
                                          <span className="ml-1">{item.text}</span>
                                      </p>
                                  ))
                              }
                              <div className="mt-10 flex justify-center">
                                  <button className={`${styleButton.buttonPrimary} flex`}>
                                      <span>Join This Plan</span>
                                      <span className="flex items-center ml-2"><FaArrowRight/></span>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              ))
          }
      </div>
    </>
  )
}
export default ItemPricing