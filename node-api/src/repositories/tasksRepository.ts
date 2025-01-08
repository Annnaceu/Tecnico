interface Task {
  id: number;
  text: string;
  summary: string | null;
  translatedText: string | null;
  lang: string | null;
}

export class TasksRepository {
  private tasks: Task[] = [];
  private currentId: number = 1;

  createTask(text: string): Task {
    const task: Task = {
      id: this.currentId++,
      text,
      summary: null,
      translatedText: null,
      lang: null,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: number, summary: string, translatedText: string, lang: string): Task | null {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);
    if (taskIndex > -1) {
      this.tasks[taskIndex].summary = summary;
      this.tasks[taskIndex].translatedText = translatedText;
      this.tasks[taskIndex].lang = lang;
      return this.tasks[taskIndex];
    }
    return null;
  }

  getTaskById(id: number): Task | null {
    return this.tasks.find((t) => t.id === id) || null;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: number): Task | null {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);
    if (taskIndex > -1) {
      const [removedTask] = this.tasks.splice(taskIndex, 1); // Remove a tarefa
      return removedTask;
    }
    return null;
  }
}
