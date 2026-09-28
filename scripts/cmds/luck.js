module.exports = {
  config: {
    name: "luck",
    version: "1.0",
    author: "You",
    role: 0,
    shortDescription: "আজকের ভাগ্য বলবে",
    category: "ফানি",
    guide: "!luck"
  },

  onStart: async function ({ message, event }) {
    const mention = Object.keys(event.mentions || {});
    const target = mention.length > 0 ? event.mentions[mention[0]] : "তোমার";
    
    const percent = Math.floor(Math.random() * 101);
    let comment = "";
    
    if (percent >= 90) comment = "🔥 ভাই তুমি আজ লাকি! লটারি কিনে ফেলো!";
    else if (percent >= 70) comment = "😎 ভালো দিন, উপভোগ করো!";
    else if (percent >= 50) comment = "🙂 মোটামুটি, দিন কাটবে।";
    else if (percent >= 30) comment = "😐 আজ সাবধানে থাকো।";
    else if (percent >= 10) comment = "😢 আজ ঘরে থাকাই ভালো।";
    else comment = "💀 ভাই আজ তো তুমি শেষ! বাসায় থাকো।";

    return message.reply(`🎲 ${target} আজকের ভাগ্য: ${percent}%\n\n${comment}`);
  }
};
