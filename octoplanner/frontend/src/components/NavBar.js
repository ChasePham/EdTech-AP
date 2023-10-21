import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import "@fontsource/roboto/400.css"; 


export default function NavBar() {
    return (
        <nav className="nav">
            <ul>
                <h1>octomize.</h1>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/input">Generate</NavLink>
                </li>
                <li>
                    <NavLink to="/octo">Octo</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/account">My Account</NavLink>
                </li>
                <li>
                    <img src={localStorage.profilePic} alt = "profile"/>
                </li>
            </ul>
        </nav>
    )
}