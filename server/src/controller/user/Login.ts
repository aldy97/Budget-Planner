import { Request, Response } from 'express';
import { MESSAGES } from '../../util/constants';
import { UserDocument, User } from '../../model/User';

const checkLogin = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  if (!email) {
    response.send(MESSAGES.EMPTY_EMAIL);
  }

  if (!password) {
    response.send(MESSAGES.EMPTY_PASSWORD);
  }

  const user: UserDocument | null = await User.findOne({
    email,
    password,
  });

  if (!user) {
    response.send(MESSAGES.WRONG_CREDENTIALS);
  } else {
    response.send(user._id);
  }
};

export default checkLogin;
