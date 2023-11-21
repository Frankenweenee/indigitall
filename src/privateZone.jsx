import "./components/form.css";
import { useNavigate } from "react-router-dom";
export function PrivateZone() {
    const navigate = useNavigate();
    const handleLogOut = () => {
        window.indigitall.logOut((device) => {
            navigate("/");
        });
    };
    return (
   
            <nav className="nav-container">
                <div className="company-container">
                    <h2>Zona Privada</h2>
                </div>
                <div className="nav-buttons-container">
                    <button
                        className="button button-contact"
                        onClick={handleLogOut}>
                        Log In
                    </button>
                </div>
            </nav>
  
    );
}
