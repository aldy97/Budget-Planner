import { Request, Response } from 'express';
import { IUser, User, UserDocument } from '../model/User';
import validator from 'validator';
import { MESSAGES } from '../util/constants';

export const checkRegister = async (request: Request, response: Response) => {
  const { name, password, email }: IUser = request.body;
  const confirmPassword: string = request.body.confirmPassword;

  if (!email) {
    response.status(400).send(MESSAGES.EMPTY_EMAIL);
  }

  if (!validator.isEmail(email)) {
    response.status(400).send(MESSAGES.INVALID_EMAIL);
  }

  if (!name) {
    response.status(400).send(MESSAGES.EMPTY_NAME);
  }

  if (!password) {
    response.status(400).send(MESSAGES.EMPTY_PASSWORD);
  }

  if (password.length < 7) {
    response.status(400).send(MESSAGES.PASSWORD_TOO_SHORT);
  }

  if (!confirmPassword) {
    response.status(400).send(MESSAGES.CONFIRM_PASSWORD_EMPTY);
  }

  if (password !== confirmPassword) {
    response.status(400).send(MESSAGES.PASSWORDS_DO_NOT_MATCH);
  }

  const user: UserDocument | null = await User.findOne({ email: email });
  if (user) {
    response.status(400).send(MESSAGES.DUPLICATE_EMAIL);
  }

  // save new user to db
  const userInfo: IUser = {
    email,
    name,
    password: password,
  };
  await new User(userInfo).save();

  response.send(200).send('Registration Succ');
};
