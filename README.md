# FriendsBook
basic copy of facebook application

Problem Statement: Build an online friends book web application using Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


===================================================================================================================

1. User backend APIs to be called from 'json-server'.
    npm install json-server --save-dev ->add json-server package to run in dev env
    db/data.json to hold all json data
    to mock API calls, in package.json, define "dev:api" : "json-server ./db/data.json --port=5501"
    npm run dev:api -> to run json-server on local