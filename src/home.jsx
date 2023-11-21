import { NavBar } from "./components/navBar";

export function Home() {
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        if (window.confirm('INDIGITALL quiere enviarte notificaciones')) {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('El usuario aceptó las notificaciones');
                } else {
                    console.log('El usuario rechazó las notificaciones');
                }
            });
        }
    }

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

