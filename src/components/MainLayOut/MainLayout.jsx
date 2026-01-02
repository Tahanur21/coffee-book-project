import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* Navigation */}
            <NavBar/>
            {/* Outlet for all components */}
            <div className="h-[(100vh-234px)}">
            <Outlet/>
            </div>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;