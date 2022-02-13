# Architecture

The project architecture is based on on a 3-layer architecture:

-   Controller layer
-   Service layer
-   Data Access Layer

## Folder structure

-   **docs**: Basic app documentation. Located at `/docs`

-   **app.js**: Located at `/src/app.js`

-   **api**: Express related stuff. Located at `src/api`

    -   controllers: Controllers for the routes. Located at `src/api/controllers`
    -   middlewares: Middlewares availables for the routes. Located at `src/api/middlewares`
    -   responses: Responses used by express. Located at `src/api/responses`
    -   routes: Routes available on the server. Located at `src/api/routes`

-   **config**: Aoo environment variables configuration. Located at `src/config`

-   **loaders**: Initialization of different services. Located at `src/loaders`

-   **models**: Databse models. Located at `src/models`

    -   pipelines: MongoDB pipelines. Located at `src/models/pipelines`

-   **service**: Business logic for controllers

## Code conventions

`Eslint` and `Prettier` have been configured to establish code conventions that have been followed.
