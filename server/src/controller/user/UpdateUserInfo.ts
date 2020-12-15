import { Request, Response } from 'express';
import { MESSAGES } from '../../util/constants';
import { User, UserDocument } from '../../model/User';

const updateUserInfo = async (req: Request, res: Response): Promise<void> => {
  const { _id, updatedFields } = req.body;
  if (!_id) {
    res.send({ status: false, message: MESSAGES.UNEXPECTED_ERROR });
    return;
  }

  let userExist: boolean;
  try {
    userExist = await User.exists({ _id });
  } catch (e) {
    res.send({ status: false, message: MESSAGES.UNEXPECTED_ERROR });
  }

  if (!userExist) {
    res.send({ status: false, message: MESSAGES.USER_ID_NOT_FOUND });
    return;
  }

  try {
    const updatedUserInfo: UserDocument = await User.findOneAndUpdate(
      { _id },
      updatedFields,
      {
        new: true,
        runValidators: true,
      }
    );
    res.send({
      status: true,
      updatedUserInfo,
      message: MESSAGES.UPDATE_USERINFO_SUCC,
    });
  } catch (e) {
    res.send({ status: false, message: MESSAGES.UNEXPECTED_ERROR });
  }
};

export default updateUserInfo;
