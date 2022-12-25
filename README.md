# Nodejs Sequelize REST API (PostgreSQL) 

Tutorial to model with ORM using [Sequelize](https://sequelize.org/).

For this example, I have used [Nodejs](https://nodejs.org/en/), [Express](https://expressjs.com/es/guide/routing.html), [PostgreSQL](https://www.postgresql.org/) and [Sequelize](https://sequelize.org/). I have also prepared a series of REST API requests through [Thunder Client](https://www.thunderclient.com/) that are hosted in the main directory of the project.

The entity relationship model is as follows:

![Entity-relationship model)](https://i.ibb.co/19JXVD4/E-R-Model.png)

## Quick start

To start using this project, you must first install the node_modules packages. To do this, open a terminal with the main path of the project and run:

```bash
npm install
```

Then create an `.env` file in the main path of the project with the following environment variables:

    PORT=<project port>
    DB_NAME=<postgresql database name>
    DB_USER=<postgresql database user>
    DB_PASS=<postgresql database password>

To run the project, run in a terminal in the main path:

```bash
npm run dev
```

Finally, I have left a `thunder-collection_sequelize.json` configuration file with all the REST API requests used in the project. To load it you must have the Thunder Client extension installed in vscode. Then in the Thunder Client collections import this file.

## Learn More

You can learn more in the [Sequelize documentation](https://sequelize.org/docs/v6/category/core-concepts/).