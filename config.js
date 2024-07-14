//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZWODlYWDZQZEEvbEhXRkNWeFJPUERqdG5wRkRUZmI2d3lCSnNoU2MzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODRMeFRGWWViUTY4Z3RqbW5hZm9oZHcyUFc3Yy81MjVVbHk4a2tDWGpTaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR2ZqWlhPSXYwS1NYemwvMXliZnNvNDBJYTExd1BnUVQ0ZzMveTU1ckVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2L1k4a09zdDJacFVOcmRMZTJTWVZHZ0tSTnQ3cHdWSm1sVzNIdG1tZHlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNMTHgvNTRueXlCYzkydGJJRENKcVZGNitSQ3hyUE1sbThwT2U2TXM2a1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJkWDd2dHNXakNuOGFRTlkwY0RJaVBOSDZrenFmazhpck0vTWNCZkNRRGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEQ0cEtVTGxhbEZ4R2FkMDc2bG9wQ0Eyb2lTSGRPV3pjMWp1Umw5VURHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVljVHFINFpTWE1abytUWCs0WVI2MTdZbXlVeHVqZmx6WHVCN2pIc0oxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI0bms4OTlkOEJXSDM1eFF1aXhtOW9wR3JKeVJDWUtZaHZFNUxyc2g0em5zN2k5MFp5UXZubXRZTjFqTmZWbGY1VU5tYWRxcUVtNlpzUXVwbWhoVmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6IjRpcHc3TkFKN0lZOG1yNERBYlpVUVJNVGVTbFNHOXR0VmY5YjJuKzBJK0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldUZGFOR3RlUnFDakRIZFlUZGNwMHciLCJwaG9uZUlkIjoiN2I1ZGRlZTktMjQ5OC00Y2QyLTk0MWEtMGQxY2VhMWZmNGE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRCaVVoL3ppaWxmUVJCL2VPYU0rZWt3R2hqST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Tzl0QXUvbDJIWmVLd2VnRDlkYVV4RENJSTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1hOWjJWS0UiLCJtZSI6eyJpZCI6IjIxMjYyNDg1NTkzOToxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJoYW16YWFtaXJuaSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmV5c09JRUVMaTB5N1FHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNWlYODY1aCtJTTFIbncyVGxNdkJBNDl4YzNZTFRjWnZ0c0p0Ym1rNC9SND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGZzSHMvK0Y3eFYySjhYUnpHYjZySEVHSmZ6dmZ5ZkJjNHQrQWpVYkhwbjU3WFZ3ZjErK1RrMGp1VnA4TGpacWZIM0dpRlF3S01zMmJpQnVoYlI4RFE9PSIsImRldmljZVNpZ25hdHVyZSI6InF0bWxqNks1WEhtcCtyb2FsSUZOeTBDSmZaRW9xVSt1aHE4VEpDK0krRkRoUmtsOHZ3RlBiTlY3dzJwdUtldkgvYklNMHQ2VEYzOEFpUHZvSnoxSmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjEyNjI0ODU1OTM5OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVZbC9PdVlmaUROUjU4Tms1VEx3UU9QY1hOMkMwM0diN2JDYlc1cE9QMGUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA5MDAxNjV9";
global.email = "hamzaamirni451@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "21262485593o";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
