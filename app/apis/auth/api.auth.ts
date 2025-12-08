import axios from '../../configs/axios.config'
import type {DataResponse} from "../../redux/slices/auth/logout.slice"

export const logoutApi = async(data: string)=>  {
    return await axios.post<DataResponse>(process.env.NEXT_PUBLIC_LOGOUT_USER_URL ?? '', {path: data}, { withCredentials: true }) 
}
