# Practica_3-ApiRest-Discos-
API REST (Express, Deno, TypeScript).  Tercera práctica de la asignatura de Arquitectura y Programación en sistemas de internet
1. [Documentación de la API](#documentacion-de-la-api)
2. [Enunciado](#enunciado)
____________________________________________________________
## DOCUMENTACIÓN DE LA API
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
- Obtener listado según el formato -> ``` "/getFormatDisco/:formato" ```
- obtener listado según el país de impresion -> ``` "/getCountryDisco/:pais" ```

POST --> Crear un nuevo disco
- Crea un nuevo disco -> ``` "/addDisco" ```

PUT --> Actualiza la info. de un disco existente por su ID
- Actualiza la info de un disco por su id -> ``` "/upgradeDisco/:id" ```

DELETE --> Elimina un disco mediante su ID
- Elimina un disco por id -> ``` "/deleteDisco/:id" ```

## ENDPOINTS INTRODUCIDOS
### GET de todos los discos
- GET `/getAllDisco`
````json
[
    {
        "_id": "653d7e72dfc5a47c53a9dded",
        "nombre": "Back in Black",
        "autor": "ACDC",
        "formato": "CD",
        "matriz": "false",
        "pais": "Canadá",
        "arte": "Es un grupo rocambolesco",
        "__v": 0
    },
    {
        "_id": "653e4f140bd49399fb433824",
        "nombre": "Mi carro me lo robaron",
        "autor": "Manolete",
        "formato": "CD",
        "matriz": "false",
        "pais": "España",
        "arte": "Esta cancione tiene mas años que tu",
        "__v": 0
    },
    {
        "_id": "6543ca0427007ddd3eeb64a8",
        "nombre": "SEN2 KBRON VOL. 2",
        "autor": "Eladio Carrion",
        "formato": "CD",
        "matriz": "false",
        "pais": "Puerto Rico",
        "arte": "Actual",
        "__v": 0
    },
//....
]
````
### GET de un disco (id)
Puedes pedir la información de un disco por su `id`
- GET `/getDisco/653d7e72dfc5a47c53a9dded`
````json
{
    "nombre": "Back in Black",
    "autor": "ACDC",
    "formato": "CD",
    "matriz": "false",
    "pais": "Canadá",
    "arte": "Es un grupo rocambolesco",
    "id": "653d7e72dfc5a47c53a9dded"
}
````
### GET de un disco (nombre)
Puedes pedir la información de un disco por su `nombre`
- GET `/getNombreDisco/SEN2 KBRON VOl. 2`
````json
{
    "nombre" : "SEN2 KBRON VOL. 2",
    "autor": "Eladio Carrion",
    "formato": "CD",
    "matriz": "false",
    "pais": "Puerto Rico",
    "arte": "Actual"
}
````
### GET de un disco (formato)
Puedes pedir la información de un disco por su `formato`
- GET `/getFormatDisco/Single`
````json
{
    "nombre" : "SEN2 KBRON VOL. 2",
    "autor": "Eladio Carrion",
    "formato": "CD",
    "matriz": "false",
    "pais": "Puerto Rico",
    "arte": "Actual"
}
````
### GET de un disco (pais)
Puedes pedir la información de un disco por su `pais`
- GET `/getCountryDisco/Puerto Rico`
````json
{
    "nombre" : "SEN2 KBRON VOL. 2",
    "autor": "Eladio Carrion",
    "formato": "CD",
    "matriz": "false",
    "pais": "Puerto Rico",
    "arte": "Actual"
}
````
### POST de un disco
Añades un disco nuevo a la colección
- POST `/addDisco`
````json
{
    "nombre": "Electric LadyLand",
    "autor": "Jimi Hendrix",
    "formato": "CD",
    "matriz": "false",
    "pais": "EEUU",
    "arte": "90´s",
    "id": "6543db4527007ddd3eeb64b7"
}
````
### PUT de un disco
Actualizas la información un disco con todos sus datos y con su `id`
- PUT `/upgradeDisco/6543db4527007ddd3eeb64b7`
````json
{
    "nombre" : "The Cry of Love",
    "autor": "Jimi Hendrix",
    "formato": "CD",
    "matriz": "false",
    "pais": "EEUU",
    "arte": "90´s"
}
````
### DELETE de un disco
Borras un disco de la colección por su `id`
- DELETE `/upgradeDisco/:id`
---------------------------------------------------
## Enunciado
Crear un API para el guardado de discos de música.  De cada disco se guardarán los siguientes datos:
- Nombre
- Autor
- Formato (LP, CD, single, cassette, reel to reel, minidisc, videocd ...)
- Matriz (si existe)
- País de impresión
- Arte de portada
- id
El api deberá de poseer las siguientes llamadas:

### GET

- Obtener todos los discos existentes
- Obtener un disco mediante id
- Obtener listado de discos según nombre
- Obtener listado de discos según formato
- Obtener listado de discos según país de impresión

### POST

- Crear nuevo disco

### PUT

- Actualizar un disco existente indicándolo por su id

### DELETE

- Eliminar un disco mediante su id
[Documentación de la API](#documentacion-de-la-api)






  

      
      








