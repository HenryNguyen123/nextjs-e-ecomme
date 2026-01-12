import Footer from "@/app/components/(client)/footer/Footer.component";
import NavbarComponent from "@/app/components/(client)/header/Navbar.component";

interface MainLayoutProps {
  children: React.ReactNode;
}

const LayoutMain = ({children} : MainLayoutProps) => {
    return(
        <>
            <div>
                <NavbarComponent/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}
export default LayoutMain