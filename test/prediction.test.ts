import { getTokenTest, makePrediction } from './services';
import { tokens } from './testEnv';

// beforeAll(() => {});

// afterAll(() => {
//   server.close();
//   // clear the history
// });

// /*
//  * TODO:
//  * 1. complete testcase,
// //  * 2. make a service for login, CLEAR
//  * 3. make a service for clear the history
//  */

describe('POST /prediction', () => {
  it('should return a response with 200', async () => {
    const data = (await getTokenTest()) as string[];
    tokens.push(data[0]);
    const token = tokens[tokens.length - 1];
    const res = await makePrediction(token);
    // console.log(res);
    expect(res.status).toBe(200);
  });
  it('should return a response with json', async () => {
    const token = tokens[tokens.length - 1];
    const res = await makePrediction(token);
    expect(res.headers['content-type']).toContain('application/json');
  });
  // lanjutkan
});
