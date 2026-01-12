
interface MainLayoutProps {
  children: React.ReactNode;
}

const LayoutAdmin = ({children}: MainLayoutProps) => {

    return(
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}
export default LayoutAdmin