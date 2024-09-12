import express from 'express';
import dotenv from 'dotenv';
import type { Application } from 'express';
import router from './src/routes/index';
import cors from 'cors';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.listen(port, () => {
  console.log(`FINDING ENV FILE: ${process.env.PORT}`);
  console.log(`Server is running at http://localhost:${port}`);
});
