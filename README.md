# Aplicação Formulario de Pesquisa Política

Uma simples aplicação com o intuito de coletar informações sobre a posição política da sociedade brasileira.
Com apenas um formulário e algumas validações nos campos inseridos pelo usuário, o objetivo final era praticar alguns conceitos de ReactJS como Hooks customizados, e algumas lógicas de validação nos inputs.

### É preciso ter a versão LTS do NodeJS instalado na máquina antes de todo o procedimento daqui descrito - ultima versão LTS até o momento da finalização deste projeto é (16.17.0)

- Acesse para fazer o download e a instalação do mesmo no endereço: https://nodejs.org/

#### Instalação e Configuração do Projeto para rodar direto na tua máquina

- Baixe os arquivos e extraia a pasta research_election_polls.

- No mesmo diretório "research_election_polls" abra o terminal/prompt de comandos e digite: npm install (Para instalar as dependências do projeto).

- No mesmo diretório "research_election_polls" crie um arquivo .env com a seguinte informação:
  REACT_APP_URL=https://pesquisa-politica-app-default-rtdb.firebaseio.com/researches.json

- Onde esse link será o endereço do seu DB Firebase que foi a tecnologia utilizada para armazenar os dados coletados.

#### Inicializando a Aplicação Research Election Polls

- No mesmo diretório "research_election_polls" abra o terminal/prompt de comandos e digite: npm start (Para inicializar a aplicação).
