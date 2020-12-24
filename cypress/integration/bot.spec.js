context('Instagram Spammer', () => {

    var insta_handle = 'HANDLE_OF_PERSON_YOU_WANT_TO_MESSAGE_WITHOUT_@'; //so if their handle is @spongebob, just set the variable to 'spongebob'
    let messages = ['(bot) get bot spammed', '(bot) hi', '(bot) idk some other random message', '(bot) ok ima stop now'];
    var login_user = 'YOUR_USER_NAME_TO_LOGIN';
    var login_pass = 'YOUR_PASSWORD_TO_LOGIN';

    beforeEach(() => {
        cy.visit('https://instagram.com/')
    })
    it('.type() - type into a DOM element', () => {
        cy.get('form').within(() => {
            cy.get('input[aria-label="Phone number, username, or email"]').type(login_user).should('have.value', login_user).then(() => {
                cy.get('input[aria-label="Password"]').type(login_pass).should('have.value', login_pass).then(() => {
                    cy.get('button[type="submit"]').click().then(() => {

                    })
                })
            })
        })
        cy.wait(3000)
        cy.visit('https://www.instagram.com/direct/inbox/')
        cy.get('button').contains('Not Now').click()
        cy.visit('https://www.instagram.com/'+insta_handle+'/')
        cy.wait(3000)
        cy.get('button[type="button"]').contains('Message').click()
        for (var i=0; i<messages.length; i++) {
            cy.get('textarea').eq(0).type(messages[i] + ' {enter}')
            cy.wait(700)
        }
    })
})