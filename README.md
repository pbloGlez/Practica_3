# Practica_3-ApiRest-Discos-
API REST (Express, Deno, TypeScript).  Tercera práctica de la asignatura de Arquitectura y Programación en sistemas de internet
      1. Documentación de la API.
      2. Enunciado 
____________________________________________________________
DOCUMENTACIÓN DE LA API
------------------------------------------------------------
Esta es una api de música diseñada para gestión y almacenamiento de discos. En esta api puedes registrar discos con nombre, formato, 
etc. Que gracias a las funciones añadidas, puedes leer, crear, actualizar o eliminar cualquier disco de la colección.
¡Espero que la disfrutes!

SCHEMA o CAMPOS
|    Key    |    Type  |    Description   |
|-----------|----------|------------------|
|   nombre  |  String  | Nombre del disco |
|   autor   |  String  |Autor del disco|
|  formato  |  String  |Formato del disco|
|  matriz   |  Boolean |Si el disco es matriz|
|    pais   |  String  |Pais de impresión del disco|
|    id     |  String  |Identificador único del disco|
_____________________________________________________________
## ENDPOINTS
GETS --> Obtienes información a cerca de los discos.
- Obtener todos los discos existentes -> ``` "/getAllDisco" ```
- Obtener un disco mediante id -> ``` "/getDisco/:id" ```
- Obtener listado según el nombre -> ``` "/getNombreDisco/:nombre" ```
- Obtener listado según el formato -> ``` "/getFormatoDisco/:formato" ```
- obtener listado según el país de impresion -> ``` "/getCountryDisco/:pais" ```

POST --> Crear un nuevo disco
- Crea un nuevo disco -> ``` "/addDisco" ```

PUT --> Actualiza la info. de un disco existente por su ID
- Actualiza la info de un disco por su id -> ``` "/upgradeDisco/:id" ```

DELETE --> Elimina un disco mediante su ID
- Elimina un disco por id -> ``` "/deleteDisco/:id" ```

## ENDPOINTS INTRODUCIDOS
- Añadir disco : <img width="250" alt="image" src="https://github.com/pbloGlez/Practica_3/assets/113451860/4ea176bc-b472-4d6b-b625-2f593ddddbd9">

      
      








