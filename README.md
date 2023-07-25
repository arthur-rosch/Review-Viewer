# IMPORT REVIEW

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Passo 1: Instalação das dependências

1. Abra o terminal (ou prompt de comando) e navegue até a pasta "api" do seu projeto.
2. Execute o comando `npm install` para instalar as dependências da API.
3. Navegue até a pasta "front-end" do seu projeto.
4. Execute novamente o comando `npm install` para instalar as dependências do front-end.

## Passo 2: Iniciar o servidor da API

1. Ainda na pasta "api", execute o seguinte comando para iniciar o servidor da API em modo de desenvolvimento:`npm run start:dev`

Agora, a API estará em execução e ouvindo em um determinado endereço, como "http://localhost:3001".

## Passo 3: Iniciar o servidor do front-end

1. Navegue até a pasta "front-end"do seu projeto.
2. Execute o seguinte comando para iniciar o servidor do front-end em modo de desenvolvimento:`npm run start`

   Agora, o front-end estará em execução e acessível através de um endereço, como "http://localhost:8080".

   ## Passo 4: Configurar a extensão do Google (opcional)


   1. Se você deseja usar a extensão do Google Chrome no modo de desenvolvimento, primeiro precisa fazer o build do front-end. Ainda na pasta "front-end", execute o comando:

      npm run build

      Isso criará os arquivos otimizados do front-end na pasta "dist".

      2. Em seguida, adicione a extensão ao Chrome seguindo estes passos:

      - Abra o Google Chrome e vá para a página "chrome://extensions/".
      - Ative o "Modo do desenvolvedor" no canto superior direito da página.
      - Clique em "Carregar sem compactação" e selecione a pasta "front-end/dist" do seu projeto.

      Agora, a extensão deve estar carregada e funcionando no modo de desenvolvimento, enquanto a API ainda está sendo executada em "http://localhost:3001".
