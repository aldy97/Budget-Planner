import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { MESSAGES } from '../../util/constants';
import { Record, RecordDocument } from '../../model/Record';
import { ServerError } from '../../util/utils';

const getRecords = async (req: Request, res: Response) => {
  const user: ObjectId = req.body.user;
  console.log(user);
  if (!user) {
    res.send(MESSAGES.USER_ID_NOT_PROVIDED);
  }

  try {
    const records: RecordDocument[] = await Record.find({ user: user });
    if (records.length === 0) {
      res.send(MESSAGES.NO_RECODS_FOUND);
    } else {
      res.json(records);
    }
  } catch (e) {
    res.send(MESSAGES.UNEXPECTED_ERROR);
    throw new ServerError({
      message: MESSAGES.UNEXPECTED_ERROR,
      statusCode: 400,
    });
  }
};

export default getRecords;
