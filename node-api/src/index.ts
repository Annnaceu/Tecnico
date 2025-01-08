import express, { Application } from 'express';
import tasksRoutes from './routes/tasksRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.get('/', (req, res) => {
  res.json({ message: 'API is running' }); // Retorna a mensagem de status
});

app.use(express.json());

// Rotas
app.use('/tasks', tasksRoutes);

// Definindo a porta para a aplicação
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Node API rodando na porta ${PORT}`);
});

export default app;

