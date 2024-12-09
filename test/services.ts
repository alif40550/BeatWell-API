import request from 'supertest';
import input from './data/predictionInputs.json';
import testUser from './data/testUser.json';
import { app } from '../src/libs/server';
import { createPayload, getUser } from '../src/services/user';
import { generateToken } from '../src/libs/jwt';

// export const server = startServer();
export const getTokenTest = async (data = testUser) => {
  const user = await getUser(data.email);

  const payload = createPayload(user!);

  return [generateToken(payload), user?.id];
};

export const signUp = async (data = testUser) => {
  const res = await request(app)
    .post('/register')
    .send(data)
    .set('Content-Type', 'application/json');

  return res;
};
export const signIn = async (data = testUser) => {
  const res = await request(app)
    .post('/login')
    .send(data)
    .set('Content-Type', 'application/json');

  return res;
};

export const makePrediction = async (token: string) =>
  await request(app)
    .post('/prediction')
    .set('Authorization', token)
    .send(input)
    .set('Content-Type', 'application/json');

export const getHistories = async (token: string, userId: string) =>
  await request(app)
    .get(`/users/${userId}/histories`)
    .set('Authorization', token)
    .set('Content-Type', 'application/json');

export const deleteHistory = async (token: string, id: string) =>
  await request(app)
    .delete(`/histories/${id}`)
    .set('Authorization', token)
    .set('Content-Type', 'application/json');
