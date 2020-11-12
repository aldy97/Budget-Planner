import mongoose, { Mongoose } from 'mongoose';
import * as CONFIG from './util/constants';
/*
remove deprecation warnings
*/
mongoose.set('useFindAndModify', false);

/*
set up promise
*/
mongoose.Promise = global.Promise;

const connect = (): Mongoose => {
  // connect to db
  mongoose.connect(CONFIG.MONGODB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    promiseLibrary: global.Promise,
    useUnifiedTopology: true,
  });

  // connection failed
  mongoose.connection.on('error', err => {
    console.log('db connection failed!');
  });

  // connection successful
  mongoose.connection.once('open', () => {
    console.log('db connection successful!');
  });

  // return mongoose instance
  return mongoose;
};

export const disconnect = (): void => {
  mongoose.disconnect();
};

export default {
  instance: mongoose,
  connect: connect,
  disconnect: disconnect,
};
