FEEDBACK DE LA PRUEBA

La prueba está desarrollada en REACT, por la petición del enunciado he utilizado un contexto para tener un estado global en el que se agregan suscripciones y en la medida de que se avanza van cambiando. 

Con la función topicsList he tomado del SDK la lista de tareas al que el cliente se suscribe al ingresar al 'sing in' cambiando el valor 'suscribed' por true. 

Luego en la medida que se avanza se crean eventos a través de la función 'sendCustomEvent' y utilizando este nos desuscribimos a el un topic cambiando su suscripción a false.

Finalmente entramos a la zona privada usando la función de 'logIn'.




1) Tiempos: 

He invertido entre 2 a 4 horas para buscar y leer toda la documentación, además de la proporcionada en el enunciado, he leido distintas páginas de INDIGITALL para tener más claro el funcionamiento de SDK, esto incluye pequeás acciones para ver el comportamiento del SDK.

2) Desarrollo:

El desarrollo gracias a la documentación ha sido fluida, entre 5 a 7 horas.

3) Dificultades y retos: 

Aunque fluido me he encontrado con varios inconvenientes.

Al ser en react y usar el contexto he creado un objeto global dentro de un useEffect. Por alguna razón algunas funciones creadas con el 'window.indigitall...' me daban error. Así que he tenido que iniciarlas como funciones anominas dentro del init. 

He uxtilizado el contexto para poder guardar estados, ya que no he encontrado si el servidor lo hace de forma automática. 







