// import request from 'supertest';
import input from './data/predictionInputs.json';
import testUser from './data/testUser.json';
// import { app } from '../src/libs/server';
import { createPayload, getUser } from '../src/services/user';
import { generateToken } from '../src/libs/jwt';
import axios from './axios';

// export const server = startServer();
export const getTokenTest = async (data = testUser) => {
  const user = await getUser(data.email);

  const payload = createPayload(user!);

  return [generateToken(payload), user?.id];
};

export const signUp = async (data = testUser) => {
  const res = await axios.post('/register', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};
export const signIn = async (data = testUser) => {
  const res = await axios.post('/login', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const makePrediction = async (token: string) =>
  await axios.post('/prediction', input, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

export const getHistories = async (token: string, userId: string) =>
  await axios.get(`/users/${userId}/histories`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

export const deleteHistory = async (token: string, id: string) =>
  await axios.delete(`/histories/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
