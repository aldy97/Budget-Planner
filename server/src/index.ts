import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'test' });
});

app.listen(7001, () => {
  console.log('server is running on 7001');
});
