import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

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

apiRouter.get('/teams', async (_request, response) => {
  const teams = await Team.find().populate('captain', 'name email').populate('members', 'name email').lean();
  response.json(teams);
});

apiRouter.get('/leaderboard', async (_request, response) => {
  const entries = await LeaderboardEntry.find().populate('user', 'name email').sort({ rank: 1 }).lean();
  response.json(entries);
});

apiRouter.get('/workouts', async (_request, response) => {
  const workouts = await Workout.find().sort({ difficulty: 1, title: 1 }).lean();
  response.json(workouts);
});

export default apiRouter;