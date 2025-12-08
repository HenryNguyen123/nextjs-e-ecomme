import Footer from "@/app/components/footer/Footer.component";
import Header from "@/app/components/header/Header.component";

interface MainLayoutProps {
  children: React.ReactNode;
}

const Layout = ({children} : MainLayoutProps) => {
    return(
        <>
            <div>
                <Header/>
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