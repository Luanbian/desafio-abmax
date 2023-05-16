import express from 'express'
import { router } from './src/routes/routes';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
app.use(router)
app.listen({port: 3030}, () => {
    console.log('Server listen at 3030')
});