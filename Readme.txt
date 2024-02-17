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


Para la practica de deployment con una BD

primero crearemos la imagen con docker build -t "nombre de la imagen": "etiqueta"

ejecutaremos los comandos de 
docker tag miapp:v1 localhost:5000/miapp:v1
docker push localhost:5000/miapp:v1

una vez que se haga, crearemos los namespaces con los nombres web, mondongo

ejecutaremos los comandos kubectl port-forward --namespace kube-system service/registry 5000:80
crearemos otra consola y ejecutaremos otro comando docker run --rm -it --network=host alpine ash -c "apk add socat && socat TCP-LISTEN:5000,reuseaddr,fork TCP:host.docker.internal:5000"

para finalizar en otra consola ejecutaremos los comandos kubctl apply -f "archivos.yml"

una vez ejecutados comprobaremos que se encuentren corriendo con kubectl get pods -n web y respectivamente mondongo

podremos tambien ejecutar el comando kubctl get svc -n web y mondongo

como el paso final ejecutaremos 
minikube service web-service-d -n web --url
para que este nos de una ip con la cual acceder a nuestra api