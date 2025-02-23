# 🏆 1º Desafio MasterClass  

Este repositório contém um teste automatizado utilizando **Cypress** para validar o fluxo de cadastro em um formulário web. O objetivo do desafio é garantir que o formulário funcione corretamente ao ser preenchido com dados dinâmicos e submetido, verificando se o comportamento esperado ocorre após o envio.  

## 🚀 Requisitos do Desafio  

### 1️⃣ Visitar a Página do Formulário  
- Acessar a página onde o formulário está localizado.  
- Garantir que a página carregue corretamente antes de iniciar os testes.  

### 2️⃣ Preencher o Formulário  
Os seguintes campos devem ser preenchidos dinamicamente:  
- **Nome Completo**  
- **E-mail**  
- **Senha**  
- **Telefone**  
- **Data de Nascimento**  
- **Endereço**  
- **Estado** (selecionar uma opção da lista)  
- **Cidade**  

### 3️⃣ Submeter o Formulário  
- Após preencher todos os campos, clicar no botão de cadastro.  

### 4️⃣ Validar o Resultado Esperado  
- Garantir que uma mensagem de confirmação ou outro comportamento esperado ocorra após o envio do formulário (exemplo: mensagem de sucesso ou redirecionamento).  

### 5️⃣ Aplicar Boas Práticas no Código  
- Organizar o código em diferentes arquivos, como `commands.js`, se necessário.  
- Utilizar **seletores confiáveis** para identificar os elementos do formulário.  
- Adicionar **comentários claros** para facilitar a compreensão do código.  

## 🛠 Tecnologias e Bibliotecas Utilizadas  
- [Cypress](https://www.cypress.io/) 🚀  
- [Faker](https://www.npmjs.com/package/@faker-js/faker?activeTab=readme)

## ▶️ Como Executar o Teste  
1. **Instalar as dependências**  
   ```sh
   npm install cypress
   npm install 
   npm install @faker-js/faker --save-dev
   ```
2. **Executar os testes no modo interativo**  
   ```sh
   npx cypress open
   ```
3. **Rodar os testes no terminal**  
   ```sh
   npx cypress run
   ```
## Observações

- Esse repositorio ainda será atualizado com mais casos de testes, então alguns comandos no arquivo `commands.js` ja vão estar com informações adicionais
