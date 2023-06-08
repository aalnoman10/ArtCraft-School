import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {

    const locaton = useLocation()
    const isLogin = locaton.pathname.includes("/login")
    const isResister = locaton.pathname.includes("/resister")
    const checkPath = isResister || isLogin

    return (
        <div>
            {!checkPath && <NavBar />}
            {!checkPath && <div className="h-[68px] bg-slate-500"></div>}
            <Outlet />
            {!checkPath && <Footer />}

        </div>
    );
};

export default Main;