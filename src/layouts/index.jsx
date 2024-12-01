import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Headers from "./Headers"

const Layout = () => {
    return (
        <>
            <Headers />
                <Outlet />
            <Footer />
        </>
    )
}

export default Layout;