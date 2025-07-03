# PruebaBackend
Mini backend desarrollado como prueba técnica para la posición de desarrollador backend. Implementa el modelo de 3 capas y arquitectura multitenant usando JavaScript, Node.js, Express y MongoDB. Permite gestionar usuarios y órdenes con separación lógica de datos por tenant, siguiendo buenas prácticas de escalabilidad y mantenimiento.

## Instalación 

git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
npm install

Cambiar en .env el link de conexion a MongoDB

## Estructura del Proyecto

Prueba Backend/
├── index.js
├── .env
└── src/
├── controllers/ # Rutas y controladores (Users, Orders)
├── models/ # Esquemas Mongoose
├── services/ # Lógica de negocio
└── middleware.js # Middleware para multitenancy

## El patrón Multitenant

Este permite separar datos entre diferentes clientes (tenants) en una sola base de datos.

> En este proyecto, cada `user` y `order` contiene un campo `tenantId` que identifica a qué tenant pertenece.

Esto permite:
- Filtrar datos por cliente
- Compartir infraestructura sin mezclar datos
- Escalabilidad y aislamiento lógico

Usamos un archivo `middleware.js` que extrae el `tenantId` desde los headers de la solicitud HTTP y lo inyecta en `req.tenantId`, así los controladores y servicios saben a qué tenant pertenece cada solicitud.

## Ejecución y Pruebas

npm run dev

Las pruebas se realizan en postman con los siguientes endpoints 

![image](https://github.com/user-attachments/assets/9b01b83e-0a7d-4462-8de6-c36756ede1ce)
![image](https://github.com/user-attachments/assets/432e747d-30d6-49a9-af03-27e15c74bb3e)


Crear Usuario
![image](https://github.com/user-attachments/assets/d79d0698-f2ee-4c3f-95d6-7fdeabaf5f42)

Obtener Usuarios
![image](https://github.com/user-attachments/assets/b42e061c-3ba4-42f9-a679-9cbeb84305ed)

Crear Pedido
![image](https://github.com/user-attachments/assets/7523aba5-fe0b-4941-b316-dd715d8d9f40)

Obtener Pedido por Id
![image](https://github.com/user-attachments/assets/c28fd439-a4a5-4051-8c35-11e2586357f2)

Obtener Pedidos por estado
![Captura de pantalla 2025-07-03 184152](https://github.com/user-attachments/assets/a13c7544-b8b5-463b-b501-622bee8c7550)

Cambiar estado de pedido a cerrado 
![image](https://github.com/user-attachments/assets/43221dc2-e877-41f6-bcfd-e070be6eb78b)

