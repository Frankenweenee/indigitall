import { NavBar } from "./components/navBar";
export function Home() {
    return (
        <>
            <NavBar />
            <div className="saludo">
                <h1>Bienvenidos a la</h1>
                <h1>Prueba técnica de aplicación Push</h1>
            </div>
        </>
    );
}
