import {faker} from "@faker-js/faker/locale/pt_BR"

Cypress.Commands.add('preencherFormulario', (nome = faker.person.fullName(), email = faker.internet.email(), password = faker.internet.password(8), 
dataNsc = faker.date.birthdate().toLocaleDateString('pt-BR'), phone = faker.helpers.replaceSymbols('##9########'), 
address = faker.location.streetAddress({useFullAddress: true}) ) =>{
    cy.get('#name').type(nome || '{selectall}{backspace}')
    cy.get('#email').type(email || '{selectall}{backspace}')
    cy.get('#password').type(password || '{selectall}{backspace}')
    cy.selecionarItemLista('#gender')
    cy.get('#birthdate').type(dataNsc || '{selectall}{backspace}')
    cy.get('#phone').type(phone || '{selectall}{backspace}')
    cy.get('#address').type(address || '{selectall}{backspace}')
    cy.selecionarItemLista('#state')
    cy.selecionarItemLista('#city')
    cy.get('#terms').click()
    cy.get('#cadastroForm > button').click()
})

Cypress.Commands.add('vericarForm', () =>{  //comando verifica se a caixa de alerta, mensagem e botao estao visiveis
    cy.get('#customAlert').should('be.visible').within(() => {
        cy.get('#alertMessage').should('have.text', 'Cadastro realizado com sucesso!');
        cy.get('#closeAlert').should('be.visible');
    })
    cy.get('#closeAlert').click()
})

Cypress.Commands.add('selecionarItemLista', (seletor) => {
    cy.get(seletor).find('option').then(($options) => {
      const values = $options.map((index, option) => option.value).get(); // Obtém um array com os valores disponíveis
      const randomValue = values[Math.floor(Math.random() * values.length)]; // Seleciona um valor aleatório
      cy.get(seletor).select(randomValue); // Seleciona o item aleatório
    });
  });
  