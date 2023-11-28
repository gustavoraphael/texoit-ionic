# Projeto Texo IT

Este repositório abriga uma aplicação Front-end moderna que utiliza as tecnologias Ionic, Angular e TypeScript para apresentar dados consumidos de uma API fornecida para fins de avaliação.

## Descrição do Projeto

Ao executar o projeto no servidor local, será apresentado um layout com um menu lateral que dá acesso a duas seções principais: "Dashboard" e "Lista". A "Dashboard" exibe informações dos indicados e vencedores da categoria de Pior Filme do Golden Raspberry Awards, enquanto a seção "Lista" mostra uma relação detalhada de filmes, que inclui um mecanismo de busca por ano e um filtro que separa os filmes premiados dos demais.

## Preparação do Ambiente

Antes de iniciar, assegure-se de que o Node.js está instalado em sua máquina. Para verificar, execute `npm --version` no terminal. Uma resposta com a versão indica que você está pronto para prosseguir.

Em seguida, instale o Git e confirme sua instalação com `git --version`. Se a versão do Git for exibida, seu ambiente está preparado para clonar o repositório do projeto.

## Clonagem e Configuração do Projeto

No terminal, clone o repositório com o seguinte comando:

```bash
git clone https://github.com/gustavoraphael/texoit-ionic.git
```

Depois de concluir o download, acesse o diretório do projeto (cd texoit-ionic) e execute o comando npm start. Este comando vai instalar todas as dependências necessárias e iniciar o servidor de desenvolvimento em http://localhost:4200. Você pode abrir este endereço no navegador para visualizar a aplicação.

## Execução do Projeto

Para iniciar uma sessão de desenvolvimento com o projeto previamente configurado, navegue até a pasta do projeto e execute `npm start`.

Se desejar instalar as dependências e iniciar o projeto em sequência, utilize o comando npm run config:start e depois acesse http://localhost:4200.

## Testes Unitários com Jasmine

Para executar os testes unitários que foram elaborados utilizando a framework Jasmine, siga os passos abaixo:

1. Certifique-se de que todas as dependências estão devidamente instaladas executando `npm install` no diretório raiz do projeto.

2. Após a instalação bem-sucedida das dependências, inicie os testes unitários com o comando `npm test`. Isso irá invocar o Karma test runner configurado para trabalhar com Jasmine, e os testes especificados nos arquivos `.spec.ts` serão executados.

3. Acompanhe a execução dos testes diretamente no terminal. Se todos os testes passarem, você verá uma saída indicando sucesso para cada caso de teste.

Esses testes são cruciais para garantir que a lógica de aplicação esteja funcionando como esperado e que futuras alterações não introduzam regressões inadvertidas.
