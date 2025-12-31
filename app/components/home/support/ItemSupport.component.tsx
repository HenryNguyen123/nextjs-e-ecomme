'use client'

import { useState } from "react"
import styleForm from '../../../../public/css/form.module.scss'

const ItemSupport:React.FC = () => {
    const [name, setName] = useState<string>('')

    const handleOnSubmit = () => {
        alert(name)
    }
    
    return(
        <>
            <div className="lg:max-w-7xl w-3/4">
                <div className="w-full flex mt-5 flex-col md:flex-row">
                    <div className="w-full md:w-1/2 mt-0 md:mt-5">
                        <label htmlFor="fullnameSupport">Your Name</label> <br/>
                        <input 
                            type="text" id="fullnameSupport" 
                            placeholder="Full Name" 
                            className={`${styleForm.inputNormal} outline-none focus:ring-0 mt-5`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-5">
                        <label htmlFor="emailSupport">Email Address</label> <br/>
                        <input type="text" id="emailSupport" placeholder="Email Address" className={`${styleForm.inputNormal} outline-none focus:ring-0 mt-5`}/>
                    </div>
                </div>
                <div className="w-full flex mt-5 flex-col md:flex-row">
                    <div className="w-full md:w-1/2 mt-5">
                        <label htmlFor="phoneSupport">Phone (Optional)</label> <br/>
                        <input type="number" id="phoneSupport" placeholder="Phone number" className={`${styleForm.inputNormal} outline-none focus:ring-0 mt-5`}/>
                    </div>
                    <div className="w-full md:w-1/2 mt-5">
                        <label htmlFor="subjectSupport">Subject</label> <br/>
                        <input type="text" id="subjectSupport" placeholder="Type Subject" className={`${styleForm.inputNormal} outline-none focus:ring-0 mt-5`}/>
                    </div>
                </div>
                <div className="w-full flex mt-5">
                    <div className="w-full mt-5">
                        <label htmlFor="MessageSupport">Message</label> <br/>
                        <textarea id="MessageSupport" placeholder="Type Message" className={`${styleForm.inputNormal} outline-none focus:ring-0 mt-5 h-30`}/>
                    </div>
                </div>
                <div className="w-full flex mt-5">
                    <div className="w-full cursor-pointer hover:text-blue-600">
                        <input type="checkbox" id="checkboxed" className="mr-2"/>
                        <label htmlFor="checkboxed" className="cursor-pointer">I have read the terms of the Service & I accept Privacy Policy.</label> <br/>
                    </div>
                </div>
                <div className="w-full flex mt-5">
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white text-24 py-2 w-full cursor-pointer hover:opacity-80"
                        onClick={handleOnSubmit}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </>
    )
}
export default ItemSupport