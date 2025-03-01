import {faker} from "@faker-js/faker/locale/pt_BR"

Cypress.Commands.add('preencherFormulario', (
    nome = faker.person.fullName(), 
    email = faker.internet.email(), 
    password = faker.internet.password(8), 
    dataNsc = faker.date.birthdate().toLocaleDateString('pt-BR'), 
    phone = faker.helpers.replaceSymbols('##9########'), 
    address = faker.location.streetAddress({useFullAddress: true})
    ) =>{
    cy.get('#name').type(nome || '{selectall}{backspace}')
    cy.get('#email').type(email || '{selectall}{backspace}')
    cy.get('#password').type(password || '{selectall}{backspace}', {log: false}) 
    cy.selecionaItemLista('#gender')
    cy.get('#birthdate').type(dataNsc || '{selectall}{backspace}')
    cy.get('#phone').type(phone || '{selectall}{backspace}')
    cy.get('#address').type(address || '{selectall}{backspace}')
    cy.selecionaItemLista('#state')
    cy.selecionaItemLista('#city')
    cy.get('#terms').click()
    cy.get('#cadastroForm > button').click()
})

Cypress.Commands.add('vericaConclusaoFormulario', () =>{
    cy.get('#customAlert').should('be.visible').within(() => {
        cy.get('#alertMessage').should('have.text', 'Cadastro realizado com sucesso!');
        cy.get('#closeAlert').should('be.visible');
    })
    cy.get('#closeAlert').click()
})

Cypress.Commands.add('selecionaItemLista', (seletor) => {
    cy.get(seletor).find('option').then(($options) => {
      const values = $options.map((index, option) => option.value).get(); 
      const randomValue = values[Math.floor(Math.random() * values.length)]; 
      cy.get(seletor).select(randomValue); 
    });
  });
  