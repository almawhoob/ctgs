# ReadMe

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.
## Content
- [Requirements](#requirements)
- [Setting up to run project](#setting-up-to-run-project)
- [Development server](#development-server)
- [Code scaffolding](#code-scaffolding)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Deploying to Github Pages](#deploying-to-github-pages)
- [Further help](#further-help)
- [Noteable issues](#noteable-issues)

## Requirements

-`node.js version 6.9.1`<br>
-`npm version 3.8.6`<br>
-`angular-cli v1.0.0-beta.21.`

## Setting up to run project

-Download the appropriate node.js package installer for your Operating System from [here](https://nodejs.org/en/download/)<br><br>
-Install node.js (after installation, command line terminal should now recognize "npm" commands)<br><br>
-Run command `npm install -g npm@3.8.6` in the terminal. This will install `npm v3.8.6` globally. Alternatively, you can run a terminal in the root folder of the project and execute `npm install npm@3.8.6` to apply it only on the project<br><br>
-Run command `npm install -g angular-cli`. This will install 'angular-cli' globally. Alternatively, you can run a terminal in the root folder of the project and execute `npm install angular-cli` to apply it only on the project<br><br>
-From a terminal running from the root directory of the project, run `npm install` to install all dependencies for the project<br><br>
-Finally, execute `ng serve` from root directory of the project. The platform is now accesible from address `localhost:4200`<br><br>

To stop the server, input `CTRL + C` / `COMMAND + C` and type 'y'

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Noteable issues
The following scenario leads to being stuck in the login page
*Login* -> *Logout* -> *Login*
After the last scenario execution, the system does not execute the routing navigation due to an issue modules performing the same operation asynchronously through the User Services. 

However, after the second execution of *Login*, users can still access the main page by accessing address https://localhost:4200/home
