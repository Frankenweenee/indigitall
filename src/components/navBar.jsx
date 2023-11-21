import { Link } from "react-router-dom";
import "./navBar.style.css";

export function NavBar() {

    const handleLogIn = () => {
        console.log("log in");
    };
    return (
        <nav className="nav-container">
            <div className="company-container">
                <img src="" alt="" />
                <h2>Indigitall</h2>
            </div>
            <div className="nav-buttons-container">
                <Link className="button" to="/signUp">
                    Sign Up
                </Link>
                <Link
                    to="/logIn"
                    className="button button-contact">
                    Log In
                </Link>
            </div>
        </nav>
    );
}
