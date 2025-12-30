'use client'
import type React from "react";
import WaitDataComponent from "../../../../components/waitLoading/waitPage/Loading.component";
import { useEffect, useState } from "react";

// get account me
import type {AppDispatch} from '../../../../redux/stores/stores.redux'
import {fetchAccountGetMe} from '../../../../redux/slices/auth/me.slice'
import {setLogin} from '../../../../redux/slices/account/account.slice'
import type {dataLogin} from '../../../../redux/slices/account/account.slice'
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const CallBackMe : React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const dispatch = useDispatch<AppDispatch>()
    const [isLoading, setIsloading] = useState<boolean>(true)

    const key: string = searchParams.get('key') ?? ''
    const handleCallBackMe = async () => {
        try {

            const data = await dispatch(fetchAccountGetMe({key})).unwrap();
            console.log('data: ', data)
            const {EM, EC, DT} = data
            if (EC === 0) {
                toast.success(EM)
                const dataLogin: dataLogin = {
                    rememberUser: true,
                    data: DT
                }
                dispatch(setLogin(dataLogin))
                setIsloading(false)
                router.push('/')
                return
            }
            toast.error(EM)
            router.push('/clients/auth/login')
            return
        } catch (error: unknown) {
            console.log(error)
        }
    }
    
useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleCallBackMe()
}, [])

    return(
        <>
            <WaitDataComponent isLoading={isLoading}/>
        </>
    )
}

export default CallBackMe