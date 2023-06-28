
# SoftJobs - Desafio 6 Autenticación y autorización de usuarios con JWT - modulo Backend con Node y Express

Esta aplicacion corresponde a un sitio web llamado SoftJobs el cual acerca oportunidades laborales accesibles a desarrolladores con poca experiencia, consiste principalmente en una pagina principal que da una minima informacion, luego tenemos un apartado de Registro ("Registrarse") y Login ("Iniciar sesion"), en el momento que inicemos sesion se nos redireccionara a otra ruta donde veremos nuestra informacion.






## Installation

Para instalar las dependencias de este desafio debes primero descargar desde la plataforma de Empieza de Desafio Latam el apoyo al desafio SoftJobs (Frontend con React) e incluirlo en una carpeta llamada frontend en la raiz del proyecto junto a la carpeta backend.

```bash
  cd backend
  npm install
  npm run dev
  cd frontend
  yarn install
  npm start
```

Para crear la base de datos y su respectiva tabla es necesario que ejecutes el archivo dbScrip.sql que se encuentra en la carpeta backend.

## Authors

- [@angelopaolo23] - https://github.com/Angelopaolo23


## API Reference


1.- userRoutes
#### Get logued user info

```http
  GET /usuarios
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Required**. Authorization token for access. |

#### Post or register a new user

```http
  POST /usuarios
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email for registration. |
| `password` | `string` | **Required**. Password for registration. |
| `rol` | `string` | **Required**. Users rol, example: Full stack, Backend or Frontend Developer. |
| `lenguage` | `string` | **Required**. Stack lenguage. |


2.- authRoutes
#### Users login

```http
  POST /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. User email. |
| `password`      | `string` | **Required**. User password. |




## Tech Stack

**Client:** React.

**Database:** PostgreSQL, PG package for node.

**Server:** Node, Express, JWT, Bcrypt, CORS, Nodemon, Dotenv.

