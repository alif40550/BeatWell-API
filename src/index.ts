import 'dotenv/config';
import express from 'express';
import useMiddleware from './middlewares/parser';
import router from './routes';
import { PORT } from './utils/env';

const app = express();

const port = PORT || 3000;

useMiddleware(app);

app.use(router);

const server = app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});

type TExpressApp = typeof app;
export { server, TExpressApp };
