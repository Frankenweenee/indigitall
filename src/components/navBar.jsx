import { Link } from "react-router-dom";
import "./navBar.style.css";
import { useIndigitall } from "../context/context";

export function NavBar() {
    const { topicsList, topicsSubscribe } = useIndigitall();
    const handleSignup = () => {
        topicsList.map((topic) => {
            if (topicsSubscribe) {
                topic.subscribed = true;
                topicsSubscribe(topic.subscribed, (error) => {
                    console.log(error);
                });
            }
        });
    };

    const handleLogIn = () => {
        console.log("log in");
    };
    return (
        <nav className="nav-container">
            <div className="company-container">
                <h2>Indigitall</h2>
            </div>
            <div className="nav-buttons-container">
                <Link className="button" to="/signUp" onClick={handleSignup}>
                    Sign Up
                </Link>
                <Link to="/logIn" className="button button-contact">
                    Log In
                </Link>
            </div>
        </nav>
    );
}
