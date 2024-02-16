La imagen creada se llama node-restapi

Para construir la imagen "docker build -t node-restapi0.1:18 ."

El comando para ejecutar viendo la consola es  "docker run -it -p3000:3000 --name rest node-restapi" 

Para ejecutar y dejar esto como si fuera un proceso de segundo planot "docker run -d -p3000:3000 --name rest node-restapi"


Para la segunda practica con la Base de datos, utiliza el comando docker compose build

Despues se usa el comando docker compose up, esto debería de ejecutar el docker compose y el docker file

Para hacer uso de la api, solo basta con ir a "localhost:3000/crear" lo que ejecutara codigo que introducira un valor a la BD

para corroborar que se introdujo bien, ingrese solo a "localhost:3000" y se debería de ver el registro

Para que se compruebe que el valor se guarda a pesar de que se apague la BD, se tiene que usar el comando docker compose down
este comando eliminara los containers, despues volveremos a ejecutar docker compose up, y veremos que los datos siguen ahí.

///////////
Para la base de datos
Crearemos una imagen llamada miapp:v3
crearemos dos namespaces: uno llamado web-namespace y otro llamado mongo-namespace
ejecutaremos los comandos kubectl apply -f deployment.yml, kubectl apply -f deploymentMongo.yml,kubectl apply -f service.yml,kubectl apply -f serviceDB.yml