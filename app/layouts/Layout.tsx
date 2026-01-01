import Footer from "@/app/components/(client)/footer/Footer.component";
import NavbarComponent from "@/app/components/(client)/header/Navbar.component";

interface MainLayoutProps {
  children: React.ReactNode;
}

const Layout = ({children} : MainLayoutProps) => {
    return(
        <>
            <div>
                <NavbarComponent/>
                {/* <div className="container"> */}
                <main>
                    {children}
                </main>
                {/* </div> */}
                <Footer/>
            </div>
        </>
    )
}
export default Layout