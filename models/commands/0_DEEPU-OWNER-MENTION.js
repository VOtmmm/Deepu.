module.exports.config = {
  name: "ADMIN",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM-BABU",
  description: "THIS BOT WAS MADE BY MR PREM BABU",
  commandCategory: "ADMIN MENTION",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100086169630526") {
];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["अरे यार मुझसे बात करो मेरी बॉस दीपू को क्यूं बुला रहे हो 🙄", "किया हुआ मेरी बॉस दीपू को क्यूं बुला रहे हो", "मेरी बॉस दीपू शायद बीजी है", "अरे यार क्यूं मेरी बॉस दीपू को तंग कर रहे हो", "मेरी बॉस दीपू अभी सो रही होगी", "लगता है मेरी बॉस दीपू लूडो खेलने में बीजी है 🤔", "किया काम है मुझे बताओ मैं दीपू बॉस को बता दूंगा", "मेरी बॉस शायद अभी ऑफ लाइन है" , "मेरी दीपू बॉस अभी बीजी है 😐✌️"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
