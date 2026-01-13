import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import "../App.css";

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div style={{ flex: 1, overflow: "auto" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
