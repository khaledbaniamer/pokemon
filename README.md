
# Documentation

  

## Overview

Welcome to the documentation of the Pokemon Go project. This project is about CRUD (Create, Read, Update, Delete) application that manages a Pokemon database, that integration with nestjs to create endpoit api and manage data from backend side .

Will descripe through this documentation about project structure, technologies used, and how to run the application.

  

## Technologies Used

-  **Node.js**: A runtime environment for executing JavaScript on the server.

-  **NestJS**: A powerful and extensible framework for building server-side applications.

-  **MySql**: A SQL database used for storing Pokemon data

-  **Prisma**: An ORM (Object-Relational Mapping) tool for efficient database access.

-  **class-transformer**: A library for transforming class objects.

-  **class-validator**: A library for data validation.

-  **node-xlsx**: A library for reading data from Excel files.

  

## Project Structure

  

#### Pokemons Folder

- Pokemon Files

-  `pokemons.controller.spec`

-  `pokemons.controller`

-  `pokemons.module`

-  `pokemons.service`

- Handles Pokemon-related operations

- Endpoints:

-  `GET /pokemons`: Retrieves Pokemon data with optional filtering.

-  `GET /pokemons/:id`: Retrieves a Pokemon by ID.

-  `POST /pokemons`: Creates a new Pokemon.

-  `PUT /pokemons/:id`: Updates Pokemon information.

-  `DELETE /pokemons/:id`: Deletes a Pokemon (Admin role required).

-  `POST /pokemons/upload`: Imports Pokemon data from an Excel file.

  ## Running the Project

To run the project, follow these steps:

1.  Make sure you have Docker and Docker Compose installed on your system.
    
2.  Open a terminal and navigate to the project directory where your  `docker-compose.yml`  is located.
    
3.  Run the following command to start the project using Docker Compose:
    
    docker-compose up

or can ruining the project following below steps 

## Clone

  

  

```bash

  

$  git  clone <github  repo  url>

  

```

```bash

  

$  cd <dir  name > //  ex:  pokemon

  

```

  

## Installation

  

  

```bash

  

$  npm  install

  

```

## .env

```bash

  

$  touch  .env

  

```

```bash

copy  below  var  and  past  it  inside  .env  file

  

DATABASE_USER=<your  database  username>

  

DATABASE_NAME  =<your  database  name>

  

DATABASE_PORT  = <your  database  port>

  

DATABASE_PASSWORD=<your  database  password>

  

DATABASE_HOST  = <your  database  host>

  

DATABASE_URL="mysql://${DATABASE_USER}:${DATABASE_PASSWORD}${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}"

  

```

## Prisma

```bash

$  npx  prisma  generate

```

  

## Prisma Migrate

```bash

$  npx  prisma  migrate  dev  --name  init

```

  
  

## Running the app

  

  

```bash

  

# development

  

$  npm  run  start

  

  

# watch mode

  

$  npm  run  start:dev

  

  

# production mode

  

$  npm  run  start:prod

  

```

  

  

## Test

  

  

```bash

  

# unit tests

  

$  npm  run  test

  

  

# e2e tests

  

$  npm  run  test:e2e

  

  

# test coverage

  

$  npm  run  test:cov

  

```