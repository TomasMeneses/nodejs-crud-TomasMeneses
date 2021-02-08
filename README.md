# Node.js CRUD !

Instruções para rodar o projeto:
Antes de tudo você precisa ter o **docker** instalado.

 1. No terminal execute: **docker run --name databasenutcache -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres**
 2. Você pode usar  uma interface visual de sua preferencia para acessar o banco de dados
mas recomendo utilizar o PostBird.
 3. Conecte-se  ao banco de dados. Username: postgres / Senha: docker.
 4. Crie uma nova database chamada nutcacheemployee.
 5. Acesse a pasta do projeto via terminal.
 6. Execute o comando **npm i** ou **yarn** para baixar as dependências.
 7. Execute a migration através do comando: **yarn sequelize db:migrate**
 8. Rode o projeto através do comando yarn dev.
