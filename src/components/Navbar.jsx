import "../App.css"
import {NavLink} from "react-router-dom";

export function Navbar (){
    return (
        <>
            <nav>
                <ul className='navbar-list'>
                    <li className='navbar-item'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='navbar-item'>
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="posts/:id/edit">Edit Post</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}