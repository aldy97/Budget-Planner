import { Response } from 'express';
import { ObjectId } from 'mongodb';
import { MESSAGES } from '../../util/constants';
import { Record, IRecord } from '../../model/Record';
import { ServerError } from '../../util/utils';
import { AugmentedRequest } from 'global';

const createRecord = async (req: AugmentedRequest, res: Response) => {
  console.log(req.body);
  const title: string = req.body.title ? req.body.title : 'No title';
  const user: ObjectId = req.body.user;
  const type: string = req.body.type;
  const category: string = req.body.category;
  const amount: number = req.body.amount;
  const description: string = req.body.description
    ? req.body.description
    : 'No description';

  const recordInfo: IRecord = {
    title,
    user,
    type,
    category,
    amount,
    description,
  };

  try {
    await new Record(recordInfo).save();
  } catch (e) {
    res.send(MESSAGES.UNEXPECTED_ERROR);
    throw new ServerError({
      message: e,
      statusCode: 400,
    });
  }

  res.json({ record: recordInfo });
};

export default createRecord;
