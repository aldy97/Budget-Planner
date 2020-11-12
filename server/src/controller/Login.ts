import { Request, Response } from 'express';
import { MESSAGES } from '../util/constants';
import { UserDocument, User } from '../model/User';

const checkLogin = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  if (!email) {
    response.status(400).send(MESSAGES.EMPTY_EMAIL);
  }

  if (!password) {
    response.status(400).send(MESSAGES.EMPTY_PASSWORD);
  }

  const user: UserDocument | null = await User.findOne({
    email,
    password,
  });

  if (!user) {
    response.status(400).send(MESSAGES.WRONG_CREDENTIALS);
  }
  // TODO: send auth token
};

export default checkLogin;
