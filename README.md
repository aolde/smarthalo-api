# smarthalo-api

This project have two goals in mind; document the existing SmartHalo API and build a new server implementation of the API. Any help in solving this is greatly appreciated. The more people that can help the faster we can reach the goal.

## Folders

- **api-definition:** Schema for the SmartHalo API, using `@airtasker/spot`, coded in TypeScript. Generates OpenAPI file and markdown documentation.
- **api-docs:** Contains the latest built documentation of the SmartHalo API.
- **api-server:** Empty as of now, but will contain an Open Source implementation of the SmartHalo API. Thought so far is that it should be solved in the quickest possible way that will make the SmartHalo app work again, and then iterate on it with support for more of the existing features. Tech stack suggestion is Node.js and MongoDB with an API (express/fastify). May be self hosted by the user or a community hosted at a cheap cloud hosting.

## Commands

To generate the API documentation, run `yarn generate-docs`. If you want to start a mock server based on API definition, run `yarn mock-server`. 

## Want to help?

There are many more endpoints to document, please have a look in the `api-definition/endpoints/todo` folder for the missing parts.