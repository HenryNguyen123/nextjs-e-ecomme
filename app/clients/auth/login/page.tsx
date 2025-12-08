// import dynamic from "next/dynamic";
// import LoginComponent from "@/app/clients/auth/login/Login.component"
import React from "react"

// const LoginComponent = dynamic(
//   () => import("@/app/clients/auth/login/Login.component"),
//   { ssr: false } // tắt SSR
// );

const Login: React.FC = () => {

    return(
        <>
            <div>
                login
                {/* <LoginComponent/> */}
            </div>
        </>
    )
}
export default Login