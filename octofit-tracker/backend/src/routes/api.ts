import { Router } from 'express';
import { Activity, User } from '../models/index.js';

const apiRouter = Router();

apiRouter.get('/', (_request, response) => {
  response.json({ service: 'octofit-tracker-api', status: 'ok' });
});

apiRouter.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

apiRouter.get('/users', async (_request, response) => {
  const users = await User.find().sort({ points: -1 }).lean();
  response.json(users);
});

apiRouter.get('/activities', async (_request, response) => {
  const activities = await Activity.find().populate('user', 'name email').sort({ createdAt: -1 }).lean();
  response.json(activities);
});

export default apiRouter;