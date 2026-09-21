import mongoose from 'mongoose';
import {
  Activity,
  LeaderboardEntry,
  Team,
  User,
  Workout,
} from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        grade: 10,
        points: 420,
      },
      {
        name: 'Jordan Lee',
        email: 'jordan.lee@example.com',
        grade: 11,
        points: 385,
      },
      {
        name: 'Taylor Morgan',
        email: 'taylor.morgan@example.com',
        grade: 9,
        points: 310,
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Trail Blazers',
        captain: users[0]._id,
        members: [users[0]._id, users[1]._id],
      },
      {
        name: 'Power Squad',
        captain: users[2]._id,
        members: [users[2]._id],
      },
    ]);

    await Activity.insertMany([
      {
        user: users[0]._id,
        type: 'running',
        durationMinutes: 30,
        distanceMiles: 2.4,
        points: 120,
      },
      {
        user: users[1]._id,
        type: 'walking',
        durationMinutes: 45,
        distanceMiles: 2.1,
        points: 85,
      },
      {
        user: users[2]._id,
        type: 'strength',
        durationMinutes: 35,
        points: 100,
      },
    ]);

    await LeaderboardEntry.insertMany([
      { user: users[0]._id, points: 420, rank: 1 },
      { user: users[1]._id, points: 385, rank: 2 },
      { user: users[2]._id, points: 310, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        title: 'Beginner Run',
        type: 'running',
        difficulty: 'beginner',
        durationMinutes: 20,
        description: 'A steady run with a comfortable warm-up and cooldown.',
      },
      {
        title: 'Full Body Strength',
        type: 'strength',
        difficulty: 'intermediate',
        durationMinutes: 30,
        description: 'A balanced bodyweight routine for the major muscle groups.',
      },
    ]);

    console.log(`Seeded ${users.length} users and ${teams.length} teams`);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
