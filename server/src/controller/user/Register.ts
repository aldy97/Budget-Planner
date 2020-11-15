import { Request, Response } from 'express';
import { IUser, User, UserDocument } from '../../model/User';
import validator from 'validator';
import { ServerError } from '../../util/utils';
import { MESSAGES } from '../../util/constants';

const checkRegister = async (request: Request, response: Response) => {
  const { name, password, email }: IUser = request.body;
  const confirmPassword: string = request.body.confirmPassword;

  if (!email) {
    response.send(MESSAGES.EMPTY_EMAIL);
    throw new ServerError({
      message: MESSAGES.EMPTY_EMAIL,
      statusCode: 400,
    });
  }

  if (!validator.isEmail(email)) {
    response.send(MESSAGES.INVALID_EMAIL);
    throw new ServerError({
      message: MESSAGES.INVALID_EMAIL,
      statusCode: 400,
    });
  }

  if (!name) {
    response.send(MESSAGES.EMPTY_NAME);
    throw new ServerError({ message: MESSAGES.EMPTY_NAME, statusCode: 400 });
  }

  if (!password) {
    response.send(MESSAGES.EMPTY_PASSWORD);
    throw new ServerError({
      message: MESSAGES.EMPTY_PASSWORD,
      statusCode: 400,
    });
  }

  if (password.length < 7) {
    response.send(MESSAGES.PASSWORD_TOO_SHORT);
    throw new ServerError({
      message: MESSAGES.PASSWORD_TOO_SHORT,
      statusCode: 400,
    });
  }

  if (!confirmPassword) {
    response.send(MESSAGES.CONFIRM_PASSWORD_EMPTY);
    throw new ServerError({
      message: MESSAGES.CONFIRM_PASSWORD_EMPTY,
      statusCode: 400,
    });
  }

  if (password !== confirmPassword) {
    response.send(MESSAGES.PASSWORDS_DO_NOT_MATCH);
    throw new ServerError({
      message: MESSAGES.PASSWORDS_DO_NOT_MATCH,
      statusCode: 400,
    });
  }

  const user: UserDocument | null = await User.findOne({ email: email });
  if (user) {
    response.send(MESSAGES.DUPLICATE_EMAIL);
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
  try {
    await new User(userInfo).save();
  } catch (e) {
    throw new ServerError({
      message: e,
      statusCode: 400,
    });
  }

  response.json({ uid: user._id, name: user.name });
};

export default checkRegister;
