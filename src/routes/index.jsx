import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Events from "../pages/Events"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
            </Route>
        </Routes>
    )
}

export default AppRoutes;