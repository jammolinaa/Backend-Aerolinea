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
 
## Iniciar API REST con NestJS - API Aerolínea

<h2>Requisitos Previos</h2>
<p>Tener instalado Node js v20+</p>
<p>Tener instalado MySQL y crear una base de datos llamada: aerolinea </p>
```Clonar el repositorio desde GitHub```

## Ingresar al cmd y usar estos comand:
```
git clone https://github.com/jammolinaa/Aerolinea.git
cd aerolinea
code .
```

## Instalar las dependencias del proyecto
```
npm install
npm i -g @nestjs/cli (opcional)
```

## Ejecutar el servidor: npm run start:dev

## Testing for API (Postman, Insomnia, Thunder Client)
## JSON’s

## Aviones
localhost:3000/aviones
{
    "modelo": "Boeing 737",
    "capacidad": 180,
    "disponible": false
}


## Pasajeros
localhost:3000/pasajeros

{ 
  "nombre": "Jam Molina",
  "documento": 12345678,
  "email": "jam.molina@example.com"
}

## Destino
localhost:3000/pasajeros

{
  "nombre": "Juan Pérez",
  "documento": 12345678,
  "email": "juan.perez@example.com"
}

## Horarios
localhost:3000/Horarios

{
  "salida": "2025-06-01 08:30",
  "llegada": "2025-06-01 12:45"
}

## LISTO










## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


