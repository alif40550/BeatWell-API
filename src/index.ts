import 'dotenv/config';
import express from 'express';
import useMiddleware from './middlewares';
import router from './routes';

const app = express();

const port = process.env.PORT || 3000;

useMiddleware(app);

app.use(router);

const server = app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});

type TExpressApp = typeof app;
export { server, TExpressApp };
