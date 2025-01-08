
# Projeto de Geração de Resumo de Texto com Hugging Face e LangChain

Este é um projeto desenvolvido como parte de uma aplicação para gerar resumos de textos de forma automática, utilizando modelos da Hugging Face e integração com o LangChain. O objetivo principal do projeto foi aplicar técnicas de Inteligência Artificial para gerar resumos concisos a partir de textos fornecidos.

## Bibliotecas Necessárias

Antes de executar o projeto, certifique-se de instalar as bibliotecas necessárias. Para isso, basta rodar o seguinte comando:

```bash
pip install -r requirements.txt
Ou, se preferir instalar manualmente, as bibliotecas principais utilizadas são:

transformers: Usada para carregar e usar os modelos da Hugging Face.
langchain: Utilizada para interagir de maneira eficaz com os modelos de linguagem.
huggingface_hub: Para fazer a conexão com o Hugging Face e carregar os modelos.
dotenv: Carregar variáveis de ambiente a partir de um arquivo .env.
pipeline (do Hugging Face): Para facilitar a execução de tarefas de geração de texto.
Como Utilizar
Certifique-se de ter um token do Hugging Face. Você pode obtê-lo na Hugging Face, caso ainda não tenha.
Crie um arquivo .env na raiz do seu projeto e adicione a seguinte linha com o seu token:
env
Copiar código
HF_TOKEN=seu_token_aqui
Execute o script para gerar resumos:
bash
Copiar código
python gerar_resumo.py
Você pode passar o texto para ser resumido, e o modelo irá gerar um resumo na língua que você especificar.
Descrição do Projeto
Neste projeto, criei uma aplicação que utiliza um modelo de linguagem da Hugging Face para gerar resumos de textos. O código foi implementado utilizando o LangChain para facilitar a integração com o modelo de IA. A ideia é usar a IA para gerar resumos rápidos e precisos de grandes blocos de texto.

Infelizmente, o resultado final do modelo não foi tão bom quanto eu esperava. No entanto, ainda acredito que a implementação demonstrou a capacidade de integrar múltiplas ferramentas para criar uma aplicação funcional de geração de texto.

O que foi implementado:
Integração com o modelo da Hugging Face: O modelo utilizado foi o "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5", carregado diretamente pela biblioteca transformers ou utilizando o HuggingFaceHub para facilitar a chamada do modelo.
Uso de LangChain: O LangChain foi utilizado para ajudar na construção dos prompts e integração com o modelo de IA.
Geração de Resumos: A aplicação foi projetada para gerar resumos em diferentes idiomas com base no texto fornecido.
Agradecimentos
Embora o resultado final não tenha sido o que eu esperava, agradeço a oportunidade de poder apresentar este projeto. E um grande sonho meu trabalhar nessa area 

Estou à disposição para discussões, feedbacks e, quem sabe, novas oportunidades. Tenho certeza de que em outros projetos que estão no meu portfólio, você poderá ver melhores resultados.

Portfólio
Caso queira ver outros projetos meus, com foco em Inteligência Artificial e Machine Learning, acesse meu portfólio. Lá, você encontrará mais implementações e exemplos de como utilizo essas tecnologias para resolver problemas reais.

https://github.com/Annnaceu/Annnaceu

Agradeço novamente pela chance e espero que possamos continuar a conversa!
