const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "2347045174399";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2347045174399" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2347045174399";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = ["It'x Alpha"];
global.OwnerNumber = ["2348061729391"];
global.ownertag = [""]; 
global.OwnerName =  "It'x Alpha";
global.BotName = "BAD☯️ALPHA";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"AA+gHB0h4ZHZ3PBjYoX970SjakO1u/CAjcY/S4Ty2Xo="},"public":{"type":"Buffer","data":"MokCkXQaETXs7cf4gCHxd+AASpE2Hdp7dQVaNWQbmnk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"wKzi5Zp1rv4S+CwjFaFBNvgdehmlZDnJyJBtZKUxXmQ="},"public":{"type":"Buffer","data":"zJVB8E0nx0F+XGUTNBKueS5aut4fPLzcGhzqsJH0DAg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aMkNnch6rQdgS9d8P9w5RFKV3KuVGd5rPDoYBLFs6H8="},"public":{"type":"Buffer","data":"auDTWfDDq02PamWAnpMQ+ndbKgYbf3n3FYZP3E4nHlU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cGsMb4VPBl4Qbt+5seCJViPCg7XxQUZ2NM9F6W9EOVI="},"public":{"type":"Buffer","data":"SRkA5hwUZpTFcCQ8lMljhN6billqTjHV8oOCx/l8dQI="}},"signature":{"type":"Buffer","data":"SAFB+z+gky1Al/H4LUPFjNYSOm07qRPtSen5y8z7RaDw7Xl38kYirrP7WlpYxlv3u3Po1ecvKmBrD1VQ7fuTgw=="},"keyId":1},"registrationId":124,"advSecretKey":"AZ4aFdg7EE24n65rRMQEVm6wfSkFQYMO/HtS1WR9UHc=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"8qcOE0oIQ2SlcNWROJnNBw","phoneId":"14d22ec6-50fd-49e6-a89e-eeb991dd9acc","identityId":{"type":"Buffer","data":"xTRTGWnIPZ9zNrF1KmR9UKzFf6k="},"registered":true,"backupToken":{"type":"Buffer","data":"e8wFjzU3gAEy91v3uDnOrISutvg="},"registration":{},"pairingCode":"2955FGEJ","me":{"id":"2348061729391:33@s.whatsapp.net"},"account":{"details":"CLeA0O8HENaUqrMGGAEgACgA","accountSignatureKey":"alnJ2mCJGY7pfGqK5W7IpAlfhAaYXCO54VRHl5iD00E=","accountSignature":"WU2lUxhCT6sQXfkTg0egKtTyf1wGPDbBMaTZbuxw5GvOJ5xnHjaJuYtSO9wmqHSfje5MpJfYrXSOw60Wq/QNAg==","deviceSignature":"JSnwOBCudNJgBS3kqpLaFt6UvsoqwwE1FxGgPKpTYlDubpoqKOxKR7RshOxHQ5hMpm0lwPnruzDLIy2p5E5EjQ=="},"signalIdentities":[{"identifier":{"name":"2348061729391:33@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWpZydpgiRmO6XxqiuVuyKQJX4QGmFwjueFUR5eYg9NB"}}],"platform":"android","lastAccountSyncTimestamp":1718258274,"myAppStateKeyId":"AAAAAIbW"}"; //Session ID here.
global.SupportGroupLink = "https://whatsapp.com/channel/0029VacFVm9ISTkLXw8Qx92L"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2348061729391"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["."];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
