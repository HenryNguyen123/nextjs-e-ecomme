import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const Layout = ({children} : MainLayoutProps) => {
    return(
        <>
            <div>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}
export default Layout