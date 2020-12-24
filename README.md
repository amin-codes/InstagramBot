# Instagram Messaging Bot
This was just a fun, quick project I made to make a bot that can send custom messages to a specific user.

Note: You can only message people that allow you to message them already.
## Setup

Make sure you have [Node.js](https://nodejs.org/) version >= v12.18.3 AND [Cypress](https://www.cypress.io/). You can install Cypress with the following command after installing Node:


```bash
npm install cypress
```

*Make sure you have set `chromeWebSecurity` to `false` in your `cypress.json` file. If you cloned this project directly, then you shouldn't have to worry about that. You can also always just copy my `cypress.json` file in this directory into yours.*

Then navigate to `cypress/integration/bot.spec.js` and modify the appropriate variables to set up your own user login, custom messages, and person you want to send those messages to. 

Finally, from the root directory of the project (I'm assuming you've cloned this project locally), run `npm install`.
## Usage

After finishing the setup, from the project's root directory, run ANY of the following commands in your terminal (depending on whichever works for you):

`'./node_modules/.bin/cypress' open`

OR

`./node_modules/.bin/cypress open`

OR

`cypress open`

THEN click `bot.spec.js` from the menu and watch the bot do its thing.
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)