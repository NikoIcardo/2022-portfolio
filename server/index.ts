import express, {Request, Response} from 'express';
import path from 'path';
import cors from 'cors'; 
// hello
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname)); 

app.use("/*", (request: Request, response: Response) => {
    response.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, () => {
    console.log("Listen on the port 8080");
});

