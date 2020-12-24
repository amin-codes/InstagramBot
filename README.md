# Instagram Messaging Bot
This was just a fun, quick project I made to make a bot that can send custom messages to a specific user.

*Important Note*: Try to limit using the bot to about 7 times every 10 minutes because otherwise your Instagram account might get flagged for having too many login attempts (which then usually means that you have to wait about 10-15 minutes until you're allowed to login again).

*Side Note*: The bot can only send messages to people that already allow you to message them.
## Setup

Make sure you have [Node.js](https://nodejs.org/) version >= v12.18.3.

From the root directory of the project (I'm assuming you've already cloned this project locally), run:
```bash
npm install
```

*Make sure you have set `chromeWebSecurity` to `false` in your `cypress.json` file. If you cloned this project directly, then you shouldn't have to worry about that. You can also always just copy my `cypress.json` file in this directory into yours.*

*Finally*, navigate to `cypress/integration/bot.spec.js` and modify the appropriate variables to set up your own user login, custom messages, and person you want to send those messages to. (You'll know the variables I'm talking about when you see them)
## Usage

After finishing the setup, from the project's root directory, run ANY of the following commands in your terminal (depending on whichever works for you):

`'./node_modules/.bin/cypress' open`

OR

`./node_modules/.bin/cypress open`

OR

`cypress open`

*THEN* click `bot.spec.js` from the menu and watch the bot do its thing.
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)