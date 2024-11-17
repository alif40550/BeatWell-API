import cors from 'cors';
import { TExpressApp } from '..';
import { json, urlencoded } from 'express';

const useMiddleware = (app: TExpressApp) => {
  app.use(json());
  app.use(urlencoded());
  app.use(cors());
};

export default useMiddleware;
