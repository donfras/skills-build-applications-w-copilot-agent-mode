import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (_request, response) => {
  response.json({ service: 'octofit-tracker-api', status: 'ok' });
});

apiRouter.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

export default apiRouter;