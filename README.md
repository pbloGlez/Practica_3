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
ENUNCIADO
-------------------------------------------------------------
Crear un API para el guardado de discos de música. 
De cada disco se guardarán los siguientes datos:
   -Nombre
   -Autor
   -Formato (LP, CD, single, cassette, reel to reel, minidisc, videocd ...)
   -Matriz (si existe)
   -País de impresión
   -Arte de portada
   -id
El api deberá de poseer las siguientes llamadas:
GET ->
  -Obtener todos los discos existentes
  -Obtener un disco mediante id
  -Obtener listado de discos según nombre
  -Obtener listado de discos según formato
  -Obtener listado de discos según país de impresión
POST ->
  -Crear nuevo disco
PUT ->
  -Actualizar un disco existente indicándolo por su id
DELETE ->
  -Eliminar un disco mediante su id


      








