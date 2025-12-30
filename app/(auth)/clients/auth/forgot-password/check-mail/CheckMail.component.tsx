'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import type React from "react"
import './alertForgot.scss'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type {AppDispatch, RootState} from '../../../../../redux/stores/stores.redux'
import { useDispatch, useSelector } from "react-redux";
import { sendMailForgotPassword } from "../../../../../redux/slices/forget-password/mailForgetPassword.slice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Oauth from "@/app/components/oauth/Oauth.component";

type eventHtml = React.ChangeEvent<HTMLInputElement>
interface validType {
    isEmail: boolean,
} 
const MailForgotPassword: React.FC = () => {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>();
    
    const [email, setEmail] = useState<string>('')
    const [checkServer, setCheckServer] = useState<boolean>(false)
    const [checkMaxRate, setCheckMaxRate] = useState<boolean>(false)
    
    const objCheckValid = { isEmail: true }
    const [isCheckvalid, setIsCheckValid] = useState<validType>(objCheckValid)

    const dataRes = useSelector((state: RootState) => state.mailForgetPassword.data ); 

    //step: check valid
    const HandleCheckValid = () => {
        if (!email) {
            toast.error('Please enter your email.')
            setIsCheckValid({...objCheckValid, isEmail: false})
            return false
        }
        const re = /\S+@\S+\.\S+/;
        if(!re.test(email.trim())) {
            toast.error('Please enter a valid email address.')
            setIsCheckValid({...objCheckValid, isEmail: false})
            return false
        }
        setIsCheckValid({...objCheckValid, isEmail: true})
        return true;
    }

    //step: click to login back
    const handleBackToLogin = () => {
        // redirect('/clients/auth/login')
        router.push('/clients/auth/login')
    } 
    //step: click to forget password component
    const handleToForgetPassword = async () => {
        const check = HandleCheckValid();
        if (!check) return
        try {
            const data = await dispatch(sendMailForgotPassword({email: email})).unwrap();
            if (data && data.EC === 0) {
                toast.success(data.EM)    
                setCheckServer(true)
                return
            }
            if (data && data.EC === 2) {
                toast.error (data.EM)    
                setIsCheckValid({...objCheckValid, isEmail: false})
                setCheckMaxRate(true)
                return
            }
            if (data && data.EC !== 0) {
                toast.error (data.EM)    
                setIsCheckValid({...objCheckValid, isEmail: false})
                return
            }
        } catch (error: unknown) {
            console.log(error)
        }
    }
     
    //step: enter result input
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.keyCode  === 13) {
            e.preventDefault()
            await handleToForgetPassword()
        }
    }
    useEffect(() => {
        document.title = 'Forgot password'
    }, [])
    return(
        <>
            <div className="alert-forgot-container">
                <div className="alert-forgot-content container ">
                    <div className="alert-forgot-form row">
                        <form className="col-10 col-sm-8 col-md-6 col-lg-4">
                            {
                                dataRes && (dataRes.EC === 0) && (
                                    <div className="alert alert-warning d-flex justify-content-center" role="alert">
                                        Your password has been reset successfully.
                                        You can now log in with your new password.
                                        For security reasons, password reset links are valid for 15 minutes only.
                                    </div>
                                )
                            }
                            <div className="alert-forgot-title">
                                <h3>Forgot password!</h3>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4 username">
                                <label className="form-label" htmlFor="form2Example1">Enter input your email</label>
                                <div>
                                    <FontAwesomeIcon icon={faUser} className="icon"/>
                                    <input type="email" id="form2Example1" 
                                        className={isCheckvalid.isEmail  ? 'form-control' : 'form-control is-invalid'}
                                        placeholder="Type your email" 
                                        value={email}
                                        readOnly={checkServer} 
                                        onChange={(e: eventHtml) => setEmail(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                            </div>

                            <button  type="button" 
                                data-mdb-button-init data-mdb-ripple-init 
                                className="btn btn-primary btn-block mb-4 button-alert-forgot "
                                disabled={ checkMaxRate ? checkMaxRate : checkServer}
                                onClick={handleToForgetPassword}
                            >
                                    Can you wanto reset password?
                            </button>

                            <div className="row mb-4 back-home">
                                <div className="col d-flex justify-content-center">
                                    <Link href="/clients/auth/login" onClick={handleBackToLogin} >
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                        Back to login
                                    </Link>
                                </div>
                            </div>
    
                            <div className="text-center abouts">
                                {/* login by oauth2 */}
                                <Oauth/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MailForgotPassword