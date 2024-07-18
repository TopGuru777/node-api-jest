import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import config from '../config/config';

beforeAll(async () => {
  await mongoose.connect(config.mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('POST /users', () => {
  it('should create a new user', async () => {
    const userData = { name: 'Arthur Palomar', email: 'arthurpalomar@test.com' };
    
    const response = await request(app)
      .post('/users')
      .send(userData)
      .expect(201);

    expect(response.body).toHaveProperty('email', 'arthurpalomar@test.com');
  });

  it('should not create a user with existing email', async () => {
    const userData = { name: 'Arthur Palomar', email: 'arthurpalomar@test.com' };
    
    await request(app)
      .post('/users')
      .send(userData)
      .expect(400);
  });
});