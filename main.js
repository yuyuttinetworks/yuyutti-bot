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
   if(msg.content.startsWith("ゆゆっちくんもだお！")){
       msg.channel.send("https://media.discordapp.net/attachments/878088284348252232/920675697356316672/1591BA58-E82A-4674-8033-4C9CF16EFA58.jpg");
   }
});  

if (config.token == undefined) {
    console.log("please set config:token");
    process.exit(0);
  }
  
  client.login(config.token);
  
