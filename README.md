## Projeto desafio IG
Desenvolvedora: Juliana Gomes | julianafelix.dev@gmail.com

## Requisitos para executar o projeto

Node.js https://nodejs.org

## Como executar o projeto?

Utilize o yarn 
   
### Passo a passo: 
-- git clone https://github.com/Juliana-Felix/Desafio-frontend-ig.git <br>
Acesse o diretório api-desafio: Desafio-backend-ig  <br>
-- yarn install  <br>
-- yarn dev

## Após a inicialização o sistema estará disponível conforme abaixo:

[http://localhost:3333](http://localhost:3333)

## Especificações da API Rest

### Endpoint de usuários

- Listagem (Método GET)
   - Endpoint <br>    
              /obterEstabelecimentoPorId/ 
   - Formato do dado a ser enviado pelo body
            * {"estabelecimento" : "0815159565"} <br> <br>
   - Endpoint <br>
              /listarEstabelecimentosPorMunicipio/
   - Formato do dado a ser enviado pelo body
            * {"municipio_id": "110018"}
    
### Sobre o projeto

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- Linguagem: JavaScriptt
- Biblioteca server: Express
- Biblioteca de Banco de dados: sqlite3
