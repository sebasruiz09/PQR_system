# Nodejs FES Template

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|CORS           | Cors accepted values            | "*"      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.0.0


# Getting started
- Clone the repository
- sport-x-shr-backend
```
- Install dependencies
```
cd <project_name>
npm run dev
``
  Navigate to `http://localhost:3000`


# TypeScript + Node 
The main purpose of this repository is to show a project setup and workflow for writing microservice. The Rest APIs will be using the Swagger (OpenAPI) Specification.


## Getting TypeScript
Add Typescript to project `npm`.
```
npm install -D typescript
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build.  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **configuration**        | Application configuration including environment-specific configs 
| **src/controllers**      | Controllers define functions to serve various express routes. 
| **src/lib**              | Common libraries to be used across your app.  
| **src/routes**           | Contain all express routes, separated by module/area of application                       
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src/monitoring**      | Prometheus metrics |
| **src**/index.ts         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    
| tslint.json              | Config settings for TSLint code style checking                                                |

## Building the project
### Configuring TypeScript compilation
```json
{
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true
    },
    
    "include": [
      "src/**/*.ts"
      
    ],
    "exclude": [
      "src/**/*.spec.ts",
      "test",
      "node_modules"
    
    ]
  }
```

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
    "ts:node": "npm run clean && ts-node src/server.ts",
    "dev": "npm run prestart && node ./dist/src/server.js",
    "prestart": "npm run clean && tsc --project .",
    "clean": "rm -rf ./dist",
    "test": "echo \"Error: no test specified\" && exit 1"
    
###Running in windows machine
Config to package.json in NPM script at "clean"


### Running tests using NPM Scripts
````
npm run test
````
Test files are created under test folder.

# TSLint
TSLint is a code linter that helps catch minor code quality and style issues.

## TSLint rules
All rules are configured through `tslint.json`.


## Running TSLint
To run TSLint you can call the main build script or just the TSLint task.
```
npm run build:live   // runs full build including TSLint
npm run lint  // runs only TSLint
```


# Common Issues

## npm install fails
The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.
