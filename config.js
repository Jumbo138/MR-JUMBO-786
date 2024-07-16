const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Infinixmobile550@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://Wa.me//+923017448723";
global.website=process.env.GURL || "https://Wa.me//+923017448723" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923017448723";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_18_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzVXcEM4RW5GVTBuMWlDUUJ4cU9HS2VBZXFtLzNTTnZhRFBCV1FaT1Y3Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTc0NDg3MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZFNjkzMzMyQTY1RUI0MUE3ODE0MDY5QjYyM0NBNjZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTExNzkyN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIya08wUEJ0MlJTV0NsNl8xV1dPMjZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA5OTYxMzBlLWJmMGItNGJhNS05ZGUzLWU4NzY5MDhiNzZlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDc4LFxuICAgICAgMjI5LFxuICAgICAgMTU0LFxuICAgICAgNjQsXG4gICAgICAyMTIsXG4gICAgICA0NixcbiAgICAgIDEwOCxcbiAgICAgIDgyLFxuICAgICAgMjMsXG4gICAgICA5NSxcbiAgICAgIDg5LFxuICAgICAgMjA4LFxuICAgICAgOTksXG4gICAgICAxMzMsXG4gICAgICAxNTgsXG4gICAgICAyMjEsXG4gICAgICAxMzAsXG4gICAgICAxMTgsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyNDAsXG4gICAgICA1OCxcbiAgICAgIDEzNCxcbiAgICAgIDEyLFxuICAgICAgMTk5LFxuICAgICAgMjIwLFxuICAgICAgMzMsXG4gICAgICAxODEsXG4gICAgICAxOTIsXG4gICAgICAxNTEsXG4gICAgICAzMSxcbiAgICAgIDIxNyxcbiAgICAgIDI0MSxcbiAgICAgIDQ1LFxuICAgICAgNDYsXG4gICAgICA3NyxcbiAgICAgIDc5LFxuICAgICAgNDgsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUFI1MThRMzluWXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFISkM0cUcwOFV0aUJETGRJOHF3LzI2YXZud3FVRWlJRjZKaE5CZEtLUWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmJMNU44c2ZQZWplOTBiNHNZb1FOTFZLd05BMzBHSEVHRVYyYkJVUFBkZUd6WGNlblJld2g3bmR2RmFraFVPamlJNUpKWjBGSkJndk1USmNac0VKQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaE1vOE8rMHpkMTc0bEwxM2M1UnE4K2xKbFIxRWNaQnd0bUlxelB2SVdwMCs0UDlQWnRucGgrUGNKb2YxVDlveUV5RVF5NDdRS0RCbU1EWTlla2h5QkE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTc0NDg3MjM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5vXCIsXG4gICAgXCJsaWRcIjogXCI3NDMwNjI4OTg3MDkzOjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTc0NDg3MjM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTExNzkyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdEWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0RULmpzb24iOiAie1wia2V5RGF0YVwiOlwiWGhLaTZzck1QYVJxdkVwQVJJS1IrRitIRncxZTN5S0pMNnVGK0lsWHNoWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA5Mjc0NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdEVS5qc29uIjogIntcImtleURhdGFcIjpcImJKMDJQOU55bnVFOE8weGQyRGUyc25OSENkakY3MjlsNVBIRWRlOWwxRms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwOTI3NDU4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRFYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkcVBKM2pSMlcrWUUyaDhKbEx6OTJMcTBxQ3dTbHM5dVJDSDc3TXUrQXlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDkyNzQ1OCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRFcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkYkg2RzNqTXdZdEx5aDlPRllJNkVNd0ovSjdwclZwNWlRUGNHU0R4cS9zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDkyNzQ1OCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0RYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGxqTnlHU3hOVFo2aHVlSTBzZWZ4eHFqUmpHMnR5SzVlUVJYRFduS3Fnaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA5Mjc0NTgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExMTc4OTA5OTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MR JUMBO 786",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MR JUMBO 786"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
