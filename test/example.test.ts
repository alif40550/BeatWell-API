// import request from 'supertest';
// import { server } from './services';
// import { app } from '../src/libs/server';
import axios from './axios';

afterAll(() => {
  // server.close();
});

describe('GET /', () => {
  it('should return a response with 200', async () => {
    // const res = await request(app).get('/');
    const res =  await axios.get('/');
    expect(res.status).toBe(200);
  });
  it('should return a response with 200', async () => {
    const res =  await axios.get('/');
    // const res = await request(app).get('/');
    expect(res.headers['content-type']).toContain('application/json');
  });
});
