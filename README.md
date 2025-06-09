<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

 # API Aerolínea - NestJS REST API

## 📋 Requisitos Previos

- **Node.js** v20 o superior
- **MySQL** instalado y configurado
- **Git** para clonar el repositorio

## 🚀 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/jammolinaa/Aerolinea.git
cd Aerolinea
```

### 2. Configurar la base de datos
Crear una base de datos en MySQL llamada `aerolinea`:
```sql
CREATE DATABASE aerolinea;
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Instalar NestJS CLI (opcional)
```bash
npm i -g @nestjs/cli
```

## ▶️ Ejecutar la aplicación

### Modo desarrollo
```bash
npm run start:dev
```

La API estará disponible en: `http://localhost:3000`

## 🧪 Testing de la API

Puedes probar la API usando herramientas como:
- **Postman**
- **Insomnia** 
- **Thunder Client** (VS Code)

## 📚 Endpoints y Ejemplos

### ✈️ Aviones
**Endpoint:** `POST http://localhost:3000/aviones`

```json
{
  "modelo": "Boeing 737",
  "capacidad": 180,
  "disponible": true
}
```

### 👥 Pasajeros
**Endpoint:** `POST http://localhost:3000/pasajeros`

```json
{
  "nombre": "Juan Pérez",
  "documento": 12345678,
  "email": "juan.perez@example.com"
}
```

### 🌍 Destinos
**Endpoint:** `POST http://localhost:3000/destinos`

```json
{
  "ciudad": "Barranquilla",
  "pais": "Cololmbia",
  "codigoAeropuerto": "EZE"
}

```

### ⏰ Horarios
**Endpoint:** `POST http://localhost:3000/horarios`

```json
{
  "salida": "2025-06-01T08:30:00Z",
  "llegada": "2025-06-01T12:45:00Z"
}
```

## 🛠️ Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeScript** - Lenguaje de programación
- **MySQL** - Base de datos
- **TypeORM** - ORM para base de datos

## 📁 Estructura del Proyecto

```
src/
├── aviones/
├── pasajeros/
├── destinos/
├── horarios/
├── app.module.ts
└── main.ts
```



## 👨‍💻 Autor

- **jammolinaa** - [GitHub](https://github.com/jammolinaa)

