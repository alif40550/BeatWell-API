import request from 'supertest';
// import { server } from './services';
import { app } from '../src/libs/server';

afterAll(() => {
  // server.close();
});

describe('GET /', () => {
  it('should return a response with 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
  it('should return a response with 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
