import { HistoryResponse } from '../src/models/History';
import { deleteHistory, getHistories, getTokenTest } from './services';
import { tokens, user } from './testEnv';

/*
 * TODO:
 * 1. make delete history by id test case,
 * 2. make get history by id test case,
 */

describe('GET /histories', () => {
  it('should return a response with 200', async () => {
    const [userToken, userId] = (await getTokenTest()) as string[];
    tokens.push(userToken);
    user.id = userId;
    const token = tokens[tokens.length - 1];
    const res = await getHistories(token, userId);
    expect(res.body.error).toBe(false);

    expect(res.status).toBe(200);
  });
  it('should return a response with json', async () => {
    const token = tokens[tokens.length - 1];
    const userId = user.id;
    const res = await getHistories(token, userId);
    expect(res.type).toBe('application/json');
  });
  it('should return a array of history', async () => {
    const token = tokens[tokens.length - 1];
    const userId = user.id;
    const { body } = await getHistories(token, userId);
    const histories = body.data as Array<HistoryResponse>;
    expect(typeof histories).toBe('object');
  });
  it('should return a error 401 if token is invalid', async () => {
    const token = 'jasfbaskjdb';
    const userId = '2';
    const res = await getHistories(token, userId);
    expect(res.body.error).toBe(true);
    expect(res.status).toBe(401);
  });
});

describe('DELETE /histories', () => {
  // it('should return a response with 200', async () => {
  //   const token = tokens[tokens.length - 1];
  //   const res = await deleteHistory(token, '1');
  //   expect(res.body.error).toBe(false);
  //   expect(res.status).toBe(200);
  // });
//   it('should return a response with json', async () => {
//     const { body } = await signIn();
//     const token = body.data.token;
//     const res = await getHistories(token);
//     expect(res.type).toBe('application/json');
//   });
//   //   it('should return a array of history', async () => {
//   //     const token = await signIn();
//   //     const { body } = await getHistories(token);
//   //     expect(typeof body.data).toBe('array');
//   //   });
//   //   it('should return a error 401 if token is invalid', async () => {
//   //     const token = 'jasfbaskjdb';
//   //     const res = await getHistories(token);
//   //     expect(res.body.error).toBe(true);
//   //     expect(res.status).toBe(401);
//   //   });
});
