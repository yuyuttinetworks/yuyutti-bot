// ファイルの読み込み
const config = require("./config.json");

// Discord bot パッケージの読み込み
const discord = require("discord.js");

// *client のインスタンス作成
const client = new discord.Client({ws : { intents: discord.Intents.ALL } });
// version profile
client.on("ready", () => {
    
    client.user.setActivity(
      `ゆゆっちくんだお！`
    );
    console.log(`${client.user.tag} にログインしました。`)
  });

client.on('message', msg => {
  if(msg.author.bot)return;
  if (msg.mentions.users.has(client.user.id)) {
    msg.reply(
      "ゆゆっちくんだお！ゆゆっちくんだお！ゆゆっちくんだお！ゆゆっちくんだお！"
    )
    }
  }
});  

if (config.token == undefined) {
    console.log("please set config:token");
    process.exit(0);
  }
  
  client.login(config.token);
  
