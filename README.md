# Discord-Extension
An extension for discord.js library that adds some specific events over discord.js defaults

To begin with, you can install library using npm like that:
```r
npm install djsext
```

Import library like that:
```js
const { ImprovedDiscordLibrary } = require("djsext")
```

Create the client instance following discord.js documentation
```js
const client = /*get reference from discord.js docs*/
```

and extend client possibilities with one line
```js
ImprovedDiscordLibrary(client)
```

### Simpler than simple and you get the following events:
- **ButtonInteractionCreate** emitted when you press button
- **CommandInteraction** emitted when you use slash command
- **SelectMenuInteraction** emitted when you interact with select menu
- **ModalSubmitInteraction** emitted when you submit modal

You could use them like string values in the `client.on` method like that:
```js
client.on("ButtonInteractionCreate", /*your callback function*/)
```
but its highly recommended to use ExEvents object that is exported from library:
```js
const { ExEvents } = require("djsext")

/* ... */

client.on(ExEvents.ButtonInteractionCreate, /*your callback function*/)
```