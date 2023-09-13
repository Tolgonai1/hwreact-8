import {Outlet} from "react-router-dom";
import {Navbar} from "./Navbar.jsx";

export function Layout(){
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}