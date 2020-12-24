context('Instagram Messaging Bot', () => {

    var insta_handle = 'HANDLE_OF_PERSON_YOU_WANT_TO_MESSAGE_WITHOUT_@'; //so if their handle is @spongebob, just set the variable to 'spongebob'
    let messages = ['(bot) get bot spammed', '(bot) hi', '(bot) idk some other random message', '(bot) ok ima stop now']; //List of messages that will be sent
    var login_user = 'YOUR_USER_NAME_TO_LOGIN'; //Your username to login to instagram
    var login_pass = 'YOUR_PASSWORD_TO_LOGIN'; //Your password to login to instagram

    var messages_loop_count = 3; //This is how many times the list of messages will be sent in the order that you have already set in the `messages` variable.
    var messages_individual_count = 1; //This is how many times EACH individual message (from the `messages` variable) will be sent IN A ROW.


    it('.type() - type into a DOM element', () => {
        cy.visit('https://instagram.com/')
        cy.get('form').within(() => {
            cy.get('input[aria-label="Phone number, username, or email"]').type(login_user).should('have.value', login_user).then(() => {
                cy.get('input[aria-label="Password"]').type(login_pass).should('have.value', login_pass).then(() => {
                    cy.get('button[type="submit"]').click()
                })
            })
        })
        cy.wait(3000)
        cy.visit('https://www.instagram.com/direct/inbox/')
        cy.get('button').contains('Not Now').click()
        cy.visit('https://www.instagram.com/'+insta_handle+'/')
        cy.wait(3000)
        cy.get('button[type="button"]').contains('Message').click()
        cy.wait(1000)
        for (var j=0; j<messages_loop_count;j++) {
            for (var i = 0; i < messages.length; i++) {
                for (var x=0; x<messages_individual_count; x++) {
                    cy.get('textarea').eq(0).type(messages[i] + ' {enter}')
                    cy.wait(700)
                }
            }
        }
    })
})