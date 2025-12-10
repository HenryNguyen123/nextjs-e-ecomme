'use client'
import React, { useEffect } from "react"

// import { useLocation, useNavigate } from "react-router-dom"
import './navabarCss.scss'
import { useDispatch, useSelector } from "react-redux"
import type {RootState, AppDispatch} from '../../redux/stores/stores.redux'
import {getLogin} from '../../redux/slices/account/account.slice'
import type {UserData} from '../../redux/slices/account/account.slice'
import {logoutAuthentication} from '../../redux/slices/auth/logout.slice'
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const NavabarComponentasdasdasd: React.FC = () => {
    // const navigate = useNavigate()
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    const isLogin: boolean = useSelector((state: RootState) => state.account.isLogin)
    const data: UserData | null= useSelector((state: RootState) => state.account.data)
    const avatarUrl: string | null = data?.data.avatar ? data.data.avatar  : ""

    //logout
    const checkIsLogin: boolean = useSelector((state: RootState) => state.logout.isLogin) 

    const handleClickUser = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        router.push('/user')
    }
    const handleClickHome = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        router.push('/')
    }
    const handleClickLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        router.push('/clients/auth/login')
    }
    
    const handleCallAuthen = async () => {
        try {
           await dispatch(getLogin())
        } catch (error) {
            console.error("Auth check failed:", error)
        }
    }

    const handleLogoutUser = async() => {
        try {
            const pathPage = window.location.pathname
            const data = await dispatch(logoutAuthentication(pathPage)).unwrap()
            if (data.EC === 0 && data.DT) {
                router.push(data.DT.path)
                return window.location.reload()
            } 
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        handleCallAuthen()
    }, [])
    
    useEffect(() => {
        console.log('islogin')
    }, [checkIsLogin])
    
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light  navbar-container">
                <div className="container-fluid container">
                    <Link className="navbar-brand" href="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-item_title">
                                <Link className="nav-link active" aria-current="page" href="/" onClick={handleClickHome}>Home</Link>
                            </li>
                            <li className="nav-item nav-item_title">
                                <Link className="nav-link" href="/user" onClick={handleClickUser}>User</Link>
                            </li>
                            <li className="nav-item dropdown nav-item_title">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    more
                                </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn button-search" type="submit">Search</button>
                        </form> */}
                        <ul className="navbar-nav mb-2 mb-lg-0 account-container">
                            {
                                !isLogin && (
                                    <li className="nav-item account-login">
                                        <Link className="nav-link" id="login-item" href="/login" onClick={handleClickLogin}>Login</Link>
                                    </li>
                                )
                            }
                            {
                                isLogin && (
                                    <li className="nav-item dropdown account-content">
                                        <Link className="nav-link dropdown-toggle gradient-custom" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Image
                                                  src={data?.data.avatar 
                                                  ? `${process.env.NEXT_PUBLIC_SERVER_URL}${data.data.avatar}`
                                                  : "/images/users/avatar/avatar_anonymous.png"}
                                                  alt="avatar"
                                                  width={40}
                                                  height={40}
                                                  className="rounded-circle"
                                            />
                                            <span>{data?.data.lastName}({data?.data.roleCode})</span>
                                        </Link>
                                        <ul className="dropdown-menu account-content-item" aria-labelledby="navbarDropdown" >
                                            <li><Link className="dropdown-item" href="#">Profile</Link></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><button className="dropdown-item" onClick={handleLogoutUser}>Logout</button></li>
                                        </ul>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-context container row">
                    <div className="logo col-3 col-sm-3">
                        logo
                    </div>
                    <div className="navbar-search col-8 col-sm-8">
                        <form className="d-flex navbar-context_item-form">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn button-search" type="submit">Search</button>
                        </form>
                        <div className="navbar-context_item-title">
                            <div className="navbar-title-item">
                                Hot
                            </div>
                            <div className="navbar-title-item">
                                deal
                            </div>
                            <div className="navbar-title-item">
                                bag
                            </div>
                        </div>
                    </div>
                    <div className="navbar-cart col-1 col-sm-2">
                        cart
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavabarComponentasdasdasd



