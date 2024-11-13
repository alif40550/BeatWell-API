import request from 'supertest';
import { server } from '../src';

afterAll(() => {
  server.close();
});

describe('GET /', () => {
  it('should return a response with 200', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});
