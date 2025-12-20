import Background from "@/app/components/home/background/Background.component"
import ModleComponent from "@/app/components/home/model/Model.component"
import React from "react"

const HomeComponent: React.FC = () => {
    
    return(
        <>
            <div className="mt-16 w-full">
                <div className="">
                    <Background/>
                    <ModleComponent/>
                </div>
            </div>
        </>
    )
}
export default HomeComponent