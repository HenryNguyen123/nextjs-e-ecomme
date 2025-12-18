import { fetchLoginByOauth2 } from "@/app/redux/slices/auth/oauth2.slice"
import { AppDispatch } from "@/app/redux/stores/stores.redux"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useDispatch } from "react-redux"

const Oauth: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    //step: signIn by OAuth2
    const handleLoginByOauth = async (title: string) => {
        try {
            //login by Oauth2
            await dispatch(fetchLoginByOauth2({title})).unwrap();
        } catch (error: unknown) {
            console.log(error)
        }
    }
    return(
        <>
            <p>or sign up with:</p>
            <div className="w-full flex justify-center">
                <button  type="button"   onClick={() => {handleLoginByOauth('facebook')}} className="btn btn-link btn-floating mx-1">
                    <FontAwesomeIcon icon={faFacebook} size="lg" color="#1877F2"/>
                </button>      
                <button  type="button"   onClick={() => {handleLoginByOauth('google')}} className="btn btn-link btn-floating mx-1">
                    <FontAwesomeIcon icon={faGoogle} size="lg" color="#DB4437"/>
                </button>
                {/* <button  type="button"   onClick={() => {handleLoginByOauth('facebook')}} className="btn btn-link btn-floating mx-1">
                    <FontAwesomeIcon icon={faTwitter} size="lg" color="#1DA1F2"/>
                </button>      
                <button  type="button"   onClick={() => {handleLoginByOauth('facebook')}} className="btn btn-link btn-floating mx-1">
                    <FontAwesomeIcon icon={faGithub} size="lg" color="#333"/>
                </button> */}
            </div>
        </>
    )
}
export default Oauth