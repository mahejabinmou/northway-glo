import { Outlet } from "react-router-dom"
import Topbar from "../ClientSide/Shared/Navbar/TopBar"
import Navbar from "../ClientSide/Shared/Navbar/Navbar"

const Layout = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
