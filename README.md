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

GETs aplicables
-----------------------------------------------------------
GETS EJECUTABLES :
  1. Pedir todos los discos de la BBDD con : /getAllDisco
  2. Puedes pedir un disco mediante el _id con : /getDisco/:id
  3. Listado de discos según el nombre con : /getNombreDisco/:nombre
  5. Listado de discos según el formato con : /getFormatDisco/:formato
  6. Listado de discos según el país de impresión con : /getCountryDisco/:pais
      








