var dbd = require("dbd.js");
var fs = require("fs");

const bot = new dbd.Bot({
  token: "ODI3MDc1NzY5NzgzNTQ5OTgy.YGVwVQ.7WZaIPIUAhURzBRjQGiQfvRA2io",
  prefix: "$getServerVar[prefix]"
});

bot.status({
  text: "/help",
  type: "LISTENING",
  time: 12
});

bot.onMessage();

// Variable
bot.variables({
  prefix: "/",
  warn: "0"
});

//commands handler
var reader = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./commands/${file}`);
  bot.command({
    name: command.name,
    code: command.code
  });
}
