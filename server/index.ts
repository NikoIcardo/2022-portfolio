import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
// hello
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

app.use('/jsAgar', (request: Request, response: Response) => {
  console.log('sending');
  return response.sendFile(path.join(__dirname, './jsAgar.html'));
});

app.use('/*', (request: Request, response: Response) => {
  return response.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, () => {
  console.log('Listen on the port 8080');
});
