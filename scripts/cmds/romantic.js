module.exports = {
  config: {
    name: "romantic",
    version: "1.0",
    author: "You",
    role: 0,
    shortDescription: "রোমান্টিক কথা বলবে",
    category: "ইউনিক",
    guide: "!romantic"
  },

  onStart: async function ({ message }) {
    const lines = [
      "তোমার চোখের দিকে তাকালে সময় থেমে যায়... 💕",
      "তুমি আমার জীবনের সবচেয়ে সুন্দর অধ্যায়। 🌹",
      "তোমার হাসিটা আমার হৃদয়ের স্পন্দন। 💓",
      "তোমাকে ছাড়া আমার পৃথিবী অন্ধকার। 🌙",
      "তুমি আমার স্বপ্ন, তুমি আমার বাস্তব। ✨",
      "তোমার সাথে প্রতিটা মুহূর্ত কবিতা হয়ে যায়। 📖",
      "ভালোবাসা মানে তোমাকে, শুধু তোমাকেই। ❤️",
      "তোমার নামটা মনে পড়লেই হাসি পায়। 😊",
      "চাঁদ না দেখে তোমাকে দেখি, তুমি বেশি সুন্দর। 🌕",
      "তোমার কণ্ঠে আমার হারিয়ে যেতে ইচ্ছে করে। 🎶"
    ];

    const random = lines[Math.floor(Math.random() * lines.length)];
    return message.reply(random);
  }
};
