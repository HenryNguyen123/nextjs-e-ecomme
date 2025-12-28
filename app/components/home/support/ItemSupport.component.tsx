const ItemSupport:React.FC = () => {

    return(
        <>
            <div className="lg:max-w-7xl w-3/4">
                <div className="w-full flex mt-5 flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="fullnameSupport">Your Name</label> <br/>
                        <input type="text" id="fullnameSupport" placeholder="Full Name" className="w-11/12 mt-2 p-1"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="emailSupport">Email Address</label> <br/>
                        <input type="text" id="emailSupport" placeholder="Email Address" className="w-11/12 mt-2"/>
                    </div>
                </div>
                <div className="w-full flex mt-5 flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="phoneSupport">Phone (Optional)</label> <br/>
                        <input type="number" id="phoneSupport" placeholder="Phone number" className="w-11/12 mt-2"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="subjectSupport">Subject</label> <br/>
                        <input type="text" id="subjectSupport" placeholder="Type Subject" className="w-11/12 mt-2"/>
                    </div>
                </div>
                <div className="w-full flex mt-5">
                    <div className="w-full">
                        <label htmlFor="MessageSupport">Message</label> <br/>
                        <textarea id="MessageSupport" placeholder="Type Message" className="h-60 w-full py-5"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemSupport