import Footer from "@/app/components/footer/Footer.component";
import NavbarComponent from "@/app/components/header/Navbar.component";

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