# alura-graphql-prisma2
Projeto do curso da Alura de GraphQL, Prisma 2 e Nexus

## Install
``` 
  npm install
```

## Run and hot-reload
``` 
  npm run dev 
```

#### Playground apollo
Open your brouser in http://localhost:4000

## Prisma Studio
``` 
  npx prisma studio
``` 

## Queries and mutations examples
```
query {
  users(where: {
    nome: {
      contains: "ed"
    }
  }) {
    nome
  }
}
```
```
query{
  postsAprovados {
    id
    titulo
  }
}
```
```
query {
  buscaAutoresPublicados(email: "ed") {
    posts {
      id
      titulo
      publicado
      autor {
        id
        nome
      }
    }
  }
}
```
```
mutation {
  createOnePost(data: {
    titulo: "Teste inserir post",
    conteudo: "Descrição do post aqui",
    publicado: true,
    autor: {
      create: {
        nome: "Cristopher",
        email: "cris@gmail.com",
      }
    }
  }) {
    id
    titulo
  }
}
```



Open your brouser in http://localhost:5555
