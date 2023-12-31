# loopLink

## Description:
This is a knitter's utility belt. In this app you'll find many tools to help you in your knitting projects, like a **row counter**, a **repetitions counter**, **decrease** and **increase** calculators, as well as a **yarn stash management** tool.

## Project outline:

This project should have a define structure following best practices:
```
/loop-link
|-- /src
|   |-- /app

|   |   |-- /core
|   |   |   |-- /services
|   |   |   |-- /models

|   |   |-- /shared
|   |   |   |-- /components

|   |   |-- /features
|   |   |   |-- /featureN
|   |   |   |   |-- /components
|   |   |   |   |-- /services
|   |   |   |   |-- featureN.module.ts
|   |   |-- app.module.ts
|   |   |-- app.component.ts
|   |   |-- app.component.html
|   |   |-- app.component.css

|-- /www
|-- package.json
|-- tsconfig.json
|-- angular.json
|-- ionic.config.json
```
In the **core** folder there will be two folders: **services** and **models**. The first one will hold the logic for data access. As this app won't have a proper backend, this is where the interaction with the database will happen. The second one will hold the models for any entities needed in the app, such as a *YarnModel*.

Each feature (*row counter*, *repetition counter*, etc) will have a separate **feature** folder, and inside of it, the folders **componentes** and **services**.
The **components** folder will hold all the UI components, and may or may not use the atomic design structure.
The **services** folder will hold the logic for the feature, since the components themselves are dumb.

The **shared** folder will have components that are shared among the features, like a navbar. These components will probably be used in the `app.component`, and will be loaded only once.

[^1]: by Rafael Gama, 12/30/23. [^1]
