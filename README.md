# Backend Boilerplate

## Description
Project created to be used as a backend boilerplate for future projects.
In the folder `src/services` you can add your services, and in the folder `src/routes` you can add your routes.

You must register your services in the `src/main.ts` file.
There is the start function where the service is started and if you have a stop function in your service you have to call it in the stop function.

There is a config service that is managed from the database, so see `schema.prisma`.

## How to use
1. Clone the repository.
2. Install the dependencies.
3. Create a `.env` file.
4. Run the project.

## Packages
- [Prisma](https://www.prisma.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Fastify Autoload](https://www.npmjs.com/package/@fastify/autoload)
- [Fastify CORS](https://github.com/fastify/fastify-cors)
- [Fastify RateLimit](https://github.com/fastify/fastify-rate-limit)
- [Fastify Bcrypt](https://github.com/beliven-it/fastify-bcrypt)
- [Fastify File-Upload](https://github.com/huangang/fastify-file-upload)
- [Fastify Static](https://github.com/fastify/fastify-static)
- [Fastify 204](https://github.com/Shiva127/fastify-204)
- [Fastify Metrics](https://gitlab.com/m03geek/fastify-metrics)
- [Fastify Qs](https://www.npmjs.com/package/fastify-qs)
- [ts-node](https://typestrong.org/ts-node/)
- [tslib](https://www.npmjs.com/package/tslib)
- [Pino Pretty](https://www.npmjs.com/package/pino-pretty)
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Scripts
- `dev`: Run the project in development mode.
- `start`: Run the project in production mode.
- `prisma:generate`: Generate the prisma client.
- `prisma:push`: Push the prisma schema to the database.
- `prisma:pull`: Pull the prisma schema from the database.
- `prisma:seed`: Seed the database. IT OVERRIDE ALL SETTINGS!
- `prisma:studio`: Open the prisma studio.

## .env
```env
DATABASE_URL=postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public
```
