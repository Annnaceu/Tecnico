from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.services.llm_service import generate_summary

app = FastAPI()

# Configurar CORS para permitir acesso de outras origens (Node.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3005"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# Modelos para entrada e saída
class TaskRequest(BaseModel):
    text: str
    lang: str

class TaskResponse(BaseModel):
    summary: str

# Rota inicial para verificar o status
@app.get("/")
def read_root():
    return {"message": "API is running"}

# Endpoint para geração de resumo
@app.post("/summarize", response_model=TaskResponse)
def summarize_task(task: TaskRequest):
    supported_languages = ["pt", "en", "es"]
    if task.lang not in supported_languages:
        raise HTTPException(status_code=400, detail="Language not supported")
    
    try:
        summary = generate_summary(task.text, task.lang)
        return TaskResponse(summary=summary)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao processar o resumo: {str(e)}")

