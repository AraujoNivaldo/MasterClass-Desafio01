import {faker} from "@faker-js/faker/locale/pt_BR"

Cypress.Commands.add('preencherFormulario', ({
    nome,
    email,
    password, 
    dataNsc, 
    phone, 
    address,
    selecionarEstado,
    aceitarTermos
    }
    ) =>{
    cy.get('#name').clear().type(nome ?? faker.person.fullName())
    cy.get('#email').clear().type(email ?? faker.internet.email())
    cy.get('#password').clear().type(password ?? faker.internet.password(8), {log: false}) 
    cy.selecionaItemLista('#gender')
    cy.get('#birthdate').clear().type(dataNsc ?? faker.date.birthdate().toLocaleDateString('pt-BR'))
    cy.get('#phone').clear().type(phone ?? faker.helpers.replaceSymbols('##9########'))
    cy.get('#address').clear().type(address ?? faker.location.streetAddress({useFullAddress: true}))
    selecionarEstado || cy.selecionaItemLista('#state')
    cy.selecionaItemLista('#city')
    aceitarTermos || cy.get('#terms').click()
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

Cypress.Commands.add('validaPreenchimentoCampos', (campo) =>{
    cy.get(campo).invoke('prop', 'validationMessage').should('be.oneOf', 
        ['Preencha este campo.', 'Marque esta caixa se deseja continuar.', 'Selecione um item da lista.']);
})

Cypress.Commands.add('verificarMensagemCampoEmail', (seletor, mensagens) => {
    cy.get(seletor)
        .focus()
        .blur()
        .then(($el) => {
            const message = $el.prop('validationMessage');
            const mensagemValida = mensagens.some((regex) => regex.test(message));
      
            expect(mensagemValida, `Mensagem capturada: "${message}"`).to.be.true;
        });
  });