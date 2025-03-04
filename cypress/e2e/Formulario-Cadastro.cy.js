// <reference types="cypress" />
describe('Formulario de cadastro', () =>{
  beforeEach(() =>{
    cy.visit('/cadastro-simples.html')
  })
  it('Deve preencher o formulario com sucesso', ()=>{
    cy.preencherFormulario({})
    cy.vericaConclusaoFormulario()
  })
  it('Campo nome deve ser obrigatorio', () =>{
    cy.preencherFormulario({ nome:'{selectall}{backspace}'})
    cy.validaPreenchimentoCampos('#name')
  })
  it('Campo email deve ser obrigatorio', () =>{
    cy.preencherFormulario({ email:'{selectall}{backspace}'})
    cy.validaPreenchimentoCampos('#email')
  })
  const emailsInvalidos = ['a', 'a@.', 'a@']
  emailsInvalidos.forEach((email)=>{
    it.only('Deve informar a digitacao incorreta do email', () =>{
      cy.preencherFormulario({ email })
      cy.verificarMensagemCampoEmail('#email', [ /Inclua um "@" no endereço de e-mail/,
         /Insira uma parte depois de "@". "a@" está incompleto./,
        /está sendo usado em uma posição incorreta em/])
    })
  })
  
  it('Campo senha deve ser obrigatorio', () =>{
    cy.preencherFormulario({ password:'{selectall}{backspace}'})
    cy.validaPreenchimentoCampos('#password')
  })
  it('Campo data de nascimento deve ser obrigatorio', () =>{
    cy.preencherFormulario({ dataNsc:'{selectall}{backspace}'})
    cy.validaPreenchimentoCampos('#birthdate')
  })
  it('Campo telefone deve ser obrigatorio', () =>{
    cy.preencherFormulario({ phone:'{selectall}{backspace}'})
    cy.validaPreenchimentoCampos('#phone')
  })
  it('Campo endereço deve ser obrigatorio', () =>{
    cy.preencherFormulario({ address:'{selectall}{backspace}'})
    cy.validaPreenchimentoCampos('#address')
  })
  it('Campo estado deve ser obrigatorio', () =>{
    cy.preencherFormulario({ selecionarEstado: false})
    cy.validaPreenchimentoCampos('#state')
  })
  it('Checkbox deve ser obrigatorio', () =>{
    cy.preencherFormulario({ aceitarTermos: false})
    cy.validaPreenchimentoCampos('#terms')
  })
})