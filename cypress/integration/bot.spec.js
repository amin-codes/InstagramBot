function Recipient(insta_handle, messages, messages_loop_count, messages_individual_count) {
    this.insta = insta_handle;
    this.messages = messages;
    this.messages_loop_count = messages_loop_count;
    this.messages_individual_count = messages_individual_count;
}

context('Instagram Messaging Bot', () => {
    var recipients = [];

    var login_user = 'YOUR_USER_NAME_TO_LOGIN'; //Your username to login to instagram
    var login_pass = 'YOUR_PASSWORD_TO_LOGIN'; //Your password to login to instagram

    recipients.push(new Recipient(
        'HANDLE_OF_PERSON_YOU_WANT_TO_MESSAGE_WITHOUT_@', //so if their handle is @spongebob, just set the variable to 'spongebob'
        ['(bot) get bot spammed', '(bot) hi', '(bot) idk some other random message', '(bot) ok ima stop now'], //This is the list of messages that will be sent to this user
        3, //This is how many times the list of messages will be sent in the order that you have already set in the previously set `messages` variable.
        1, //This is how many times EACH individual message (from the `messages` variable) will be sent IN A ROW.
    ))
    //To add more recipients, just do a similar `push` action to the `recipients` array again //

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
        recipients.forEach( recipient => {
            cy.visit('https://www.instagram.com/'+recipient.insta+'/')
            cy.wait(3000)
            cy.get('button[type="button"]').contains('Message').click()
            cy.wait(1000)
            for (var j=0; j<recipient.messages_loop_count;j++) {
                for (var i = 0; i < recipient.messages.length; i++) {
                    for (var x=0; x<recipient.messages_individual_count; x++) {
                        cy.get('textarea').eq(0).type(recipient.messages[i] + ' {enter}')
                        cy.wait(700)
                    }
                }
            }
        })

    })
})