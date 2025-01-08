import express, { Application } from 'express';
import tasksRoutes from './routes/tasksRoutes';

const app: Application = express();
app.use(express.json());

app.use('/tasks', tasksRoutes);

app.listen(3005, () => {
  console.log('API Node.js rodando em http://localhost:3005');
});

export default app;
