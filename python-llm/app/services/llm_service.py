from langchain.llms import HuggingFaceHub
from langchain.prompts import PromptTemplate
import os
from dotenv import load_dotenv

load_dotenv()

def generate_summary(text: str, lang: str) -> str:
    hf_token = os.getenv("HF_TOKEN")
    
    if not hf_token:
        raise ValueError("Token do Hugging Face não encontrado no ambiente.")
    
    try:
        llm = HuggingFaceHub(
            repo_id="OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",  # Modelo leve
            model_kwargs={"temperature": 0.7, "max_new_tokens": 512},
            huggingfacehub_api_token=hf_token,
        )

        prompt_template = PromptTemplate(
            input_variables=["text", "lang"],
            template=(
                "Resuma o seguinte texto no idioma {lang}:\n"
                "{text}\n\nResumo no idioma {lang}:" 
            )
        )
        
        prompt = prompt_template.format(text=text, lang=lang)
        response = llm(prompt)
        
        return response.strip()
    
    except Exception as e:
        raise RuntimeError(f"Erro ao gerar resumo: {str(e)}")

if __name__ == "__main__":
    text = "Aqui está um exemplo de texto para ser resumido."
    lang = "pt" 
    
    summary = generate_summary(text, lang)
