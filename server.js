import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import PostsRouter from './routes/posts.routes.js';
import { logger } from 'logger-express';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(logger());



app.use(PostsRouter);

app.listen(PORT, () =>{
    console.log(`Server corriendo en http://localhost:${PORT}`);
});