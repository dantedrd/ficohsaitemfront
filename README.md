# Test Ficohsa

## Descripción
Es una aplicación en nextjs con rect  desarrollada para buscar items.

## Características
- **nEXTJS 13**: Framework de react.
- **Node 18.17.1**: Versión del lenguaje de programación.
- **MATERIAL-UI**: libreria de diseño con componentes ya establecidos.
- **Axios**: Libreria para el consumo api.
- **zustand**: Libreria para la administracion de los estados.
- **react 18.2.0**: Libreria de react para el desarrollo de los componentes.
- **Docker**: Se utiliza docker para la contenerizacion de la aplicacion.
- **Docker-compose**: Se utiliza docker-compose para la gestion de los contenedores.
- **Amazon-EC2**: se utiliza un servidor virtual ec2 para el despliegue de la aplicacion.


## Metodología y[README.md](README.md) Principios de Desarrollo
- **Principios SOLID**: Seguidos para promover un diseño de software orientado a objetos limpio y mantenible.

## Requisitos
- Node 18.17.1

## Configuración y Ejecución
### Configuración Local
1. Clonar el repositorio.
2. Ejecutar el proyecto utilizando el comando npm:
   ```shell
   npm run dev

## Uso de la Aplicacion
1. **[/]**: encontraras el buscados.
2. **[/items?search=query]**: puedes ejecutar la siguiente url para buscar los item y listarlos.
3. **[/item/:id]**: puedes buscar y visualizar un item por el id.

La demo de la aplicacion la puedes ver corriendo desde la siguiente ruta [Swagger](http://52.21.129.164/).


## Pruebas
Las pruebas unitarias se pueden ejecutar mediante el comando:
1. *Ejecuón de pruebas:*
   ```shell
   npm run test
