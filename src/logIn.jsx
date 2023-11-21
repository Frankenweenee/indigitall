import { useNavigate } from "react-router-dom";
import { useIndigitall } from "./context/context";

export function LogIn() {
    const navigate = useNavigate();
    const { logIn } = useIndigitall;

    const handleSubmit = (event) => {
        event.preventDefault();
    
            window.indigitall.logIn("Indigitall_User", (device) => {
                navigate("/private_zone");
            });(error)=>{
            console.log(error)}
        
    };

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="password" name="date" placeholder="Password" />
            <button type="submit">Enviar</button>
        </form>
    );
}
