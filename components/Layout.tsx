import { FC } from "react";
import Header from "./Header";

interface LayoutProps{
    children: React.ReactNode
}
const Layout:FC<LayoutProps> = ({children}) => {

    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}
export default Layout