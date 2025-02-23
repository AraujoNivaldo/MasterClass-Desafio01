// <reference types="cypress" />
describe('Formulario de cadastro', () =>{
  beforeEach(() =>{
    cy.visit('/cadastro-simples.html')
  })
  it('Deve preencher o formulario com sucesso', ()=>{
    cy.preencherFormulario()
    cy.vericarForm()
  })
})