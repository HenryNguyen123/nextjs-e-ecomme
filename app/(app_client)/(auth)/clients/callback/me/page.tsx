import CallBackMe from "@/app/(auth)/clients/callback/me/me.component"
import React, { Suspense } from "react"

const Me: React.FC = () => {

    return(
        <>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <CallBackMe/>
                </Suspense>
            </div>
        </>
    )
}
export default Me