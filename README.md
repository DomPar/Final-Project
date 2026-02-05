# PetFriends

Plataforma de adopción de mascotas que conecta refugios con futuros adoptantes. Los usuarios pueden explorar perfiles de animales, crear publicaciones sobre sus mascotas y gestionar procesos de adopción de forma sencilla e intuitiva.

---

## 📋 Tabla de Contenidos

- [Demo / Capturas](#-demo--capturas)
- [Requisitos Funcionales](#-requisitos-funcionales)
- [Tecnologías Usadas](#-tecnologías-usadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Variables de Entorno](#-variables-de-entorno)
- [Licencia](#-licencia)
- [Autor / Contacto](#-autor--contacto)

---

## 🎨 Demo / Capturas

**Demo en vivo:** [https://tu-deploy.netlify.app](https://tu-deploy.netlify.app)

### Página Principal
![Dashboard](./screenshots/dashboard.png)
*Vista principal donde los usuarios pueden explorar mascotas disponibles para adopción*

### Perfil de Mascota
![Pet Profile](./screenshots/pet-profile.png)
*Información detallada de cada mascota con fotos, descripción y preferencias*

### Panel de Refugio
![Shelter Dashboard](./screenshots/shelter-dashboard.png)
*Gestión de mascotas desde la perspectiva del refugio*

---

## ⚙️ Requisitos Funcionales

- **Usuarios:**
  - Registro y autenticación (usuario/refugio)
  - Explorar catálogo de mascotas
  - Crear y gestionar publicaciones
  - Editar perfil y avatar
  - Sistema de favoritos

- **Refugios:**
  - Añadir y gestionar mascotas
  - Editar información del refugio
  - Subir fotos mediante Cloudinary

- **Generales:**
  - Diseño responsive
  - Navegación intuitiva
  - Autenticación con JWT

---

## 🛠️ Tecnologías Usadas

### Frontend
- **React** 18.3.1
- **Vite** 7.3.1 (Build tool)
- **React Router** 7.1.1 (Navegación)
- **Axios** (Peticiones HTTP)
- **Material-UI** (Componentes UI)
- **CSS** vanilla (Estilos personalizados)

### Backend
- **Node.js** 20.19+
- **Express** (API REST)
- **Sequelize** (ORM)
- **MySQL** (Base de datos)
- **JWT** (Autenticación)
- **bcrypt** (Hashing de contraseñas)
- **Cloudinary** (Almacenamiento de imágenes)

### Deploy
- **Frontend:** Netlify
- **Backend:** Render
- **Base de datos:** Aiven (MySQL)

---

## 📦 Requisitos Previos

- **Node.js** versión 20.19 o superior
- **npm** o **yarn**
- Cuenta en [Cloudinary](https://cloudinary.com) para subida de imágenes
- Base de datos MySQL (local o remota)

---

## 🚀 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/DomPar/Final-Project.git
cd Final-Project
```

### 2. Instalar dependencias del Frontend
```bash
cd frontend
npm install
```

### 3. Instalar dependencias del Backend
```bash
cd ../backend
npm install
```

### 4. Configurar variables de entorno

Crea un archivo `.env` en la carpeta `backend/` (ver sección [Variables de Entorno](#-variables-de-entorno))

### 5. Iniciar la base de datos

Asegúrate de tener MySQL corriendo y crea la base de datos:
```sql
CREATE DATABASE FinalProject;
```

### 6. Ejecutar el proyecto

**Backend:**
```bash
cd backend
npm start
# o con nodemon
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

El frontend estará en `http://localhost:5173` y el backend en `http://localhost:3000`

---

## 🔐 Variables de Entorno

### Backend (`backend/.env`)

El backend requiere las siguientes variables de entorno para funcionar correctamente:

- **`DB_HOST`**: Dirección del servidor de base de datos MySQL (ej: `localhost` o la URL de Aiven)
- **`DB_USER`**: Usuario de la base de datos con permisos de lectura/escritura
- **`DB_PASSWORD`**: Contraseña del usuario de la base de datos
- **`DB_NAME`**: Nombre de la base de datos a utilizar (ej: `FinalProject`)
- **`DB_PORT`**: Puerto de conexión a MySQL (por defecto `3306`)
- **`DB_DIALECT`**: Dialecto de Sequelize, debe ser `mysql`
- **`JWT_SECRET`**: Cadena secreta para firmar los tokens de autenticación JWT. Debe ser una cadena larga y aleatoria
- **`SALT`**: Número de rondas para el hashing de contraseñas con bcrypt (recomendado: `10`)
- **`CLOUDINARY_URL`**: URL de configuración de Cloudinary en formato `cloudinary://api_key:api_secret@cloud_name`. Se obtiene desde el dashboard de Cloudinary
- **`PORT`**: Puerto en el que correrá el servidor Express (por defecto `3000`)

### Frontend (`frontend/.env`)

El frontend solo necesita:

- **`VITE_API_URL`**: URL completa de la API del backend incluyendo `/api` al final
  - **Desarrollo local**: `http://localhost:3000/api`
  - **Producción**: `https://tu-backend.onrender.com/api`

---

## 📄 Licencia

Este proyecto no tiene licencia definida.

---

## 👤 Autor / Contacto

**Domingo Paredes**

- GitHub: [@DomPar](https://github.com/DomPar)
- Proyecto: [Final-Project](https://github.com/DomPar/Final-Project)

---

_Desarrollado como proyecto final del Bootcamp de Desarrollo Web Full Stack_