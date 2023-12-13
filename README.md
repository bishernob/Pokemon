Pokémon Go API Documentation


Table of Contents

Getting Started
    Introduction
    Installation
    API Endpoints
    Environment Variables
    API Documentation Swagger
    Unit Tests with Jest
    Running with Docker
    File Structure
    Conclusion


-Introduction

Welcome to the documentation for the Pokémon Go API! This API provides endpoints for managing Pokémon data, allowing you to perform various operations such as fetching all Pokémon, creating new Pokémon, updating existing ones, and more.

-Installation


Before you begin, ensure you have the following installed:

Node.js

npm (Node Package Manager)

git clone https://github.com/bishernob/pokemon-api.git

Navigate to the project directory:

cd Pokemon 

two ways to run the app :

    1- Docker : 
        
            . in terminal direct to Project /Pokemon .
            . then run  docker-compose up --build .
            . run localhost:8080 in browser.

    2- local : 

    * i handle another way to run the application local , just follow these steps :

Install dependencies:

npm install 

    (Install Dependencies :Ensure that you have the required dependencies installed. Open a terminal and run the following command: npm install)

Set up your environment variables by creating a .env file (see .env.example for reference).

    **** IMPORTANT *** (Don't forget to add you xlsx file path (Pokemon Go.xlsx) with XLSX_FILE_PATH name )

npm db:all

    Create and Populate the Database

    Runthe following command to create and populate the database with data from the Pokémon Go.xlsx sheet. Update the .env file with the correct path to the sheet.



Run the application:

npm run start

    Start the API by running the following command. The API will be accessible at http://localhost:8080. npm run start 

Scripts 
npm install 
npm run db:all
npm run start

API Endpoints

 GetAll  API :

URL: http://localhost:8080/api/pokemons/
Method: GET
Description: This endpoint will get all data in table 

Filtering API:

URL: http://localhost:8080/api/pokemons/filter?
Method: GET
Description: This endpoint could be used for filtering based on different parameters, such as Pokémon type and generation.

Create API


URL: http://localhost:8080/api/pokemons/
Method: POST
Description: This endpoint will create new pokemon data in table     
  ***( name , pokedex_number , img_name , generation) these fields required 


Update API
URL: http://localhost:8080/api/pokemons/:id/update:
Method: PUT
Description: This endpoint will update data by id


DELETE API 

Update API
URL: http://localhost:8080/api/pokemons/:id/delete:
Method: DELETE
Description: This endpoint will delete data by id


Environment Variables


The application uses the following environment variables:

DB_USERNAME: PostgreSQL username
DB_PASSWORD: PostgreSQL password
DB_NAME: PostgreSQL database name
DB_HOST: PostgreSQL database host
DB_PORT: PostgreSQL database port
XLSX_FILE_PATH: Path to the XLSX file containing Pokemon data


API Documentation Swagger

We have implemented Swagger for comprehensive API documentation. This not only serves as a reference for developers but also facilitates unit testing. You can explore and interact with our APIs using the Swagger documentation.


Swagger's interactive documentation allows you to test each API endpoint directly from the documentation. Follow these steps to perform unit testing: 

        npm run start

        http://localhost:8080/api-docs

1- Navigate to the specific API endpoint you want to test (e.g., Create a new Pokemon).
2- Click on the "Try it out" button.
3- Input the required parameters in the request body or as query parameters. (there is example)
4- Click on the "Execute" button to send the request.
You will receive real-time responses, making it easy to validate and test the functionality of our APIs




Unit Tests with Jest

We have implemented unit tests for our Pokemon API using Jest, a popular JavaScript testing framework. Unit tests help ensure the reliability and correctness of our codebase.

Running Unit Tests

To run the unit tests, follow these steps:

Install Dependencies:
Ensure that you have the required dependencies installed by running: npm i 

Run Unit Tests:
Execute the following command to run the Jest unit tests: npx jest 

Writing Tests
Each module (controller, model, route, etc.) has its corresponding test file, where we write test cases to cover different scenarios and functionalities.


Running with Docker

To run the application with Docker, use the following commands: 

    docker-compose up --build

This command will build the Docker image, start the PostgreSQL database, and run the application.



File Structure
The file structure is organized to maintain a clean and modular codebase:

config: This directory contains configuration files for Sequelize, database , unit-test,and swagger connections

controllers: Controllers handle the application's logic (Create , Update , Delete , Read , Filter). They receive input from the client, interact with the models , and send the response back.

migrations: Migrations define the structure of the database schema. They allow for version control of the database, making it easy to manage changes over time.

models: Models define the structure of the data, representing tables in the database. Sequelize uses these models to interact with the database.

routes: Routes define the API endpoints and their associated controllers. They help in organizing the API's structure and make it easy to add or modify endpoints.

tests: This directory contains unit tests for the application. Testing is crucial to ensure that the application works as expected and to catch potential issues early in the development process.

.env: The environment variables file contains configuration settings such as database credentials and file paths. It's crucial for keeping sensitive information secure and configurable.

.gitignore: This file specifies patterns that should be ignored by Git, such as node_modules or local configuration files, to avoid unnecessary files being added to the version control system.

app.js: The entry point of the application. It sets up the Express server, middleware, and routes.

Dockerfile: This file defines the instructions to create a Docker image for the application. It includes details such as the base image, dependencies installation, and application setup.

docker-compose.yml: The Docker Compose file defines the services, networks, and volumes needed for the application. It simplifies the process of running the application in a Dockerized environment.

Conclusion
This structure provides a foundation for building and maintaining a scalable and modular Node.js application. It encourages best practices such as separation of concerns, modularity, and version-controlled database changes. It also facilitates ease of deployment using Docker