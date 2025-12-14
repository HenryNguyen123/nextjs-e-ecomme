import ResetPasswordComponent from "@/app/clients/auth/forgot-password/reset-password/ResetPassword.component"
import React, { Suspense } from "react"

const ResetPassword: React.FC = () => {

    return(
        <>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ResetPasswordComponent/>
                </Suspense>
            </div>
        </>
    )
}
export default ResetPassword 