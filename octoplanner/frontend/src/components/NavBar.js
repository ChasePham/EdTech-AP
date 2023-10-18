import { NavLink } from "react-router-dom";
import "../css/NavBar.css";


export default function NavBar() {
    return (
        <nav className="nav">
            <h1>octomize.</h1>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/input">Generate</NavLink>
                </li>
                <li>
                    <NavLink to="/calendar">Octo</NavLink>
                </li>
                <li>
                    <NavLink to="/calendar">About</NavLink>
                </li>
            </ul>
            
        </nav>
    )
}