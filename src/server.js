import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';

import graphqlVersions from './graphql/versions';
import graphqlServer from './graphql/server';
import graphqlClient from './graphql/client';
import apiRouter from './api/router';
import apiQueries from './api/queries';

const app = express();

Object.keys(graphqlVersions).forEach(version => {
    const schema = makeExecutableSchema(graphqlVersions[version]);
    const queries = apiQueries[version];

    app.use(`/${version}/graphql`, graphqlServer(schema));
    app.use(`/${version}/api`, apiRouter(graphqlClient(schema), queries));
});

const server = app.listen(8080, () => {
    console.log(`Server is now listening on http://localhost:${8080}...`);
});

export default server;
