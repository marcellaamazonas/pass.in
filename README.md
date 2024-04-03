pass.in
O pass.in é uma aplicação de gestão de participantes em eventos presenciais.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

Requisitos
Requisitos funcionais
O organizador deve poder cadastrar um novo evento;
O organizador deve poder visualizar dados de um evento;
O organizador deve poser visualizar a lista de participantes;
O participante deve poder se inscrever em um evento;
O participante deve poder visualizar seu crachá de inscrição;
O participante deve poder realizar check-in no evento;
Regras de negócio
O participante só pode se inscrever em um evento uma única vez;
O participante só pode se inscrever em eventos com vagas disponíveis;
O participante só pode realizar check-in em um evento uma única vez;
Requisitos não-funcionais
O check-in no evento será realizado através de um QRCode;
Documentação da API (Swagger)
Para documentação da API, acesse o link: https://nlw-unite-nodejs.onrender.com/docs

Banco de dados
Nessa aplicação vamos utilizar banco de dados relacional (SQL). Para ambiente de desenvolvimento seguiremos com o SQLite pela facilidade do ambiente.

// Para rodar typescript no node, é necessário:
//npm i typescript @types/node -D
//npx tsc --init
//npx tsc
//npm i tsx -D
//npx tsx src/server.ts
//npx tsx watch src/server.ts
//npm i fastify

//Para integracao com banco de dados vamos usar o Prisma
//npm i prisma -D
//npx prisma init --datasource-provider SQLite
//sudo npx prisma migrate dev
//sudo npx prisma studio

//Biblioteca para validacao
//sudo npm i zod

//integração do fastify com zod
//sudo npm i fastify-type-provider-zod
