import { Router } from 'express';

const apiRouter = (graphqlClient, queries) => {
    const router = Router({ mergeParams: true });

    router.get('/:query', async (req, res, next) => {
        const { query } = req.params;
        const { data } = await graphqlClient.request(queries[query]);

        if (!data) {
            return res.status(404).end('Not Found.');
        }

        return res.json(data);
    });

    return router;
};

export default apiRouter;
