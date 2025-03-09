import { Outlet } from "react-router-dom";
import Header from "./Header";

// Common layout
const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;