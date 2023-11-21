import "./components/form.css";
import { useNavigate } from "react-router-dom";

export function PrivateZone() {

    const navigate = useNavigate();
    const handleLogOut = (event) => {
        event.preventDefault();
        navigate("/");
        window.indigitall.logOut(
            (device) => {
                navigate("/");
            },
            (error) => {
                console.log(error);
            }
        );
    };
    return (
        <>
            <nav className="nav-container">
                <div className="company-container">
                    <h2>Zona Privada</h2>
                </div>
                <div className="nav-buttons-container">
                    <button
                        className="button button-contact"
                        onClick={handleLogOut}>
                        Log Out
                    </button>
                </div>
            </nav>
            <h1>HAS LOGRADO SUSCRIBIRTE</h1>
        <p>recibiras una confirmación</p>
        </>
    );
}
