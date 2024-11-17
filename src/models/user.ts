import { Request } from 'express';

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface ValidationRequest extends Request {
  userData: UserData;
}

export { UserData, ValidationRequest };