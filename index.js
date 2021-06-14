const Aoijs = require.("aoi.js")

const bot = new Aoijs.Bot({
token: "YOUR_BOT_TOKEN_HERE", // Your Discord Bot Token
prefix: "n?" // Change to whatever letter/symbol you want.
})
bot.onMessage()

bot.command({
name: "ping", // Command Name
code: `$ping Ping!` // Code for the command
})

bot.joinCommand({
        channel: "Channel ID", //Enter your joins Welcome ID
        code: `<@$authorID> just joined, welcome!` // Join Message
})
bot.onJoined()

bot.readyCommand({
    channel: "YOUR_BOT_READY_CHANNEL",
    code: `$log[Ready on $userTag[$clientID]]` // Message for the command
})
