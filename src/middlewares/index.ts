import bodyParser from 'body-parser';
import cors from 'cors';
import { TExpressApp } from '..';

const useMiddleware = (app: TExpressApp) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(cors());
};

export default useMiddleware;