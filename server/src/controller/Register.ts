import { Request, Response } from 'express';
import { IUser, User, UserDocument } from '../model/User';
import validator from 'validator';
import { ServerError } from '../util/utils';
import { MESSAGES } from '../util/constants';

const checkRegister = async (request: Request, response: Response) => {
  const { name, password, email }: IUser = request.body;
  const confirmPassword: string = request.body.confirmPassword;

  if (!email) {
    throw new ServerError({
      message: MESSAGES.EMPTY_EMAIL,
      statusCode: 400,
    });
  }

  if (!validator.isEmail(email)) {
    throw new ServerError({
      message: MESSAGES.INVALID_EMAIL,
      statusCode: 400,
    });
  }

  if (!name) {
    throw new ServerError({ message: MESSAGES.EMPTY_NAME, statusCode: 400 });
  }

  if (!password) {
    throw new ServerError({
      message: MESSAGES.EMPTY_PASSWORD,
      statusCode: 400,
    });
  }

  if (password.length < 7) {
    throw new ServerError({
      message: MESSAGES.PASSWORD_TOO_SHORT,
      statusCode: 400,
    });
  }

  if (!confirmPassword) {
    throw new ServerError({
      message: MESSAGES.CONFIRM_PASSWORD_EMPTY,
      statusCode: 400,
    });
  }

  if (password !== confirmPassword) {
    throw new ServerError({
      message: MESSAGES.PASSWORDS_DO_NOT_MATCH,
      statusCode: 400,
    });
  }

  const user: UserDocument | null = await User.findOne({ email: email });
  if (user) {
    throw new ServerError({
      message: MESSAGES.DUPLICATE_EMAIL,
      statusCode: 400,
    });
  }

  // save new user to db
  const userInfo: IUser = {
    email,
    name,
    password,
  };
  await new User(userInfo).save();

  response.send(200).send('Registration Succ');
};

export default checkRegister;
