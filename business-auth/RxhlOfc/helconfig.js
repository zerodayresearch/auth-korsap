global.prefa = ['','!','.',',','🐤','🗿']
global.falown = "Anda bukan Owner 🥲"
global.falmurbug = "Anda bukan PwnOsec 🥲"
global.inputnum = "Silahkan Input Nomor"
global.falgrup = "Only Group 😁"
global.imagemenu = ["https://i.ibb.co.com/C83VBCQ/Copy-of-White-Minimalist-Round-Photo-Instagram-Post-1.png"];

global.owner = [
  "62....", //should start with country code
  ""  //second number if available
]


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})