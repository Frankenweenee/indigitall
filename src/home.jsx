import { NavBar } from "./components/navBar";
export function Home() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(function(permission) {
          if (permission === 'granted') {
            window.confirm('Atento: Recibirás una push 1 minuto después de aceptar el permiso de notificaciones');
            location.reload();
          }
        });
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

