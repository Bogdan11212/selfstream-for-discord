 const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('949383883990917222')
    .setType('STREAMING') //STREAMING, PLAYING, LISTENING.
    .setURL('https://www.twitch.tv/islark_') // or your yt url
    .setState('задоначено 0₽')
    .setName('🫐')
    .setDetails('@frostout🩸')
    .setStartTimestamp(Date.now()) // remove this if you dont want the timestamp (the time it started the rpc)
    /*.setParty({         
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/859639720803958793/1113123725865386034/a6fbadb27cfa7acd19bebb6bb20612a4.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('🕷') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1059613667202707466/1094672637340426310/ezgif.com-video-to-gif1.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('💀') //Text when you hover the Small image
    .addButton('links', 'https://frostout.taplink.ws')
    .addButton('discord guild', 'https://discord.gg/AWJqRcnaaZ')
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
})

client.login(process.env.token)






















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/
