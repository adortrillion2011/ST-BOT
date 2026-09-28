module.exports = {
  config: {
    name: "roast",
    version: "1.0",
    author: "You",
    role: 0,
    shortDescription: "মজার রোস্ট",
    category: "ফানি",
    guide: "!roast @user"
  },

  onStart: async function ({ message, event }) {
    const mention = Object.keys(event.mentions || {});
    if (mention.length === 0) {
      return message.reply("❌ কাউকে মেনশন করুন!");
    }
    const target = event.mentions[mention[0]];

    const roasts = [
      `${target} এর ছবি দেখে আয়নাও লজ্জা পায়! 😂`,
      `${target} এত স্লো যে蜗牛 ও তাকে ওভারটেক করে! 🐌`,
      `${target} এর IQ আর আমার ওয়াইফাই স্পিড একই! 📶`,
      `${target} যখন জন্মেছে, ডাক্তার বলেছিল "ওরে বাবা রে!" 😱`,
      `${target} এর ব্রেইন ১TB, কিন্তু সব ফাইল করাপ্টেড! 💾`,
      `${target} কে দেখলে গুগল বলে "Did you mean: ভুল?" 🔍`,
      `${target} এত ফালতু যে WiFi ও connect হতে চায় না! 📵`,
      `${target} এর হাসি দেখে হাসপাতালের রোগীরা সুস্থ হয়ে যায়! 🏥`
    ];

    const random = roasts[Math.floor(Math.random() * roasts.length)];
    return message.reply(random);
  }
};
