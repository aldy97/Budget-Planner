import mongoose from 'mongoose';
import db from '../db.config';
import { UserDocument } from './User';

const instance = db.instance;

export enum type {
  expense = 'expense',
  income = 'income',
}

export interface IRecord {
  title?: string;
  user: UserDocument['_id'] | UserDocument;
  type: string;
  category: string;
  amount: number;
  description?: string;
  createdOn?: Date;
  updatedOn?: Date;
}

export type RecordDocument = mongoose.Document & IRecord;

const recordSchema = new instance.Schema({
  title: { type: String, default: 'No title' },
  user: { type: instance.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: [true, 'A record must have a type'] },
  category: { type: String, required: [true, 'A record must have a category'] },
  amount: { type: Number, required: [true, 'A record must have an amount'] },
  description: { type: String, default: 'No description' },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
});

export const Record = instance.model<RecordDocument>('Record', recordSchema);
