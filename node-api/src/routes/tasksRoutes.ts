import { Router, Request, Response } from 'express';
import { TasksRepository } from '../repositories/tasksRepository';
import axios from 'axios';

const router = Router();
const tasksRepository = new TasksRepository();

// POST: Cria uma tarefa e solicita resumo ao serviço Python
router.post("/", async (req: Request, res: Response) => {
  try {
    const { text, lang } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Campo "text" é obrigatório.' });
    }

    // Validação do idioma
    const supportedLanguages = ['pt', 'en', 'es'];
    if (!supportedLanguages.includes(lang)) {
      return res.status(400).json({ error: 'Language not supported' });
    }

    // Cria a "tarefa"
    const task = tasksRepository.createTask(text);

    // Envia o texto para o serviço Python para gerar o resumo
    const response = await axios.post(`${process.env.PYTHON_LLM_URL}/summarize`, { text, lang });

    // Resumo gerado pelo serviço Python
    const { summary, translated_text } = response.data;

    // Atualiza a tarefa com o resumo, texto traduzido e idioma
    tasksRepository.updateTask(task.id, summary, translated_text, lang);

    return res.status(201).json({
      message: "Tarefa criada com sucesso!",
      task: tasksRepository.getTaskById(task.id),  // Retorna a tarefa com o resumo
    });
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    return res.status(500).json({ error: "Ocorreu um erro ao criar a tarefa." });
  }
});

// GET: Lista todas as tarefas
router.get("/", (req: Request, res: Response) => {
  const tasks = tasksRepository.getAllTasks();
  return res.json(tasks);
});

// GET: Lista uma tarefa pelo ID
router.get("/:id", (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id, 10);  // Converte para número
  const task = tasksRepository.getTaskById(taskId);

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  return res.json(task);
});

// DELETE: Remove uma tarefa pelo ID
router.delete("/:id", (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id, 10);  // Converte para número
  const task = tasksRepository.deleteTask(taskId);

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  return res.status(200).json({ message: "Tarefa deletada com sucesso." });
});

export default router;
