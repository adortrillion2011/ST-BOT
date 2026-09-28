module.exports = {
  config: {
    name: "8ball",
    version: "1.0",
    author: "You",
    role: 0,
    shortDescription: "যেকোনো প্রশ্নের উত্তর",
    category: "ফানি",
    guide: "!8ball <প্রশ্ন>"
  },

  onStart: async function ({ message, args }) {
    if (args.length === 0) {
      return message.reply("❌ একটা প্রশ্ন করুন! যেমন: !8ball আমি কি পাস করবো?");
    }

    const answers = [
      "✅ হ্যাঁ, নিশ্চিত!",
      "❌ না, কখনোই না!",
      "🤔 হয়তো...",
      "💯 একদম নিশ্চিত হ্যাঁ!",
      "😐 এখন বলা কঠিন।",
      "🌟 ভাগ্য তোমার পক্ষে!",
      "☁️ উত্তরটা অন্ধকারে।",
      "🔥 হ্যাঁ, কিন্তু সাবধানে!",
      "😅 সম্ভবত না।",
      "🎯 তোমার ইচ্ছাই হবে!"
    ];

    const answer = answers[Math.floor(Math.random() * answers.length)];
    return message.reply(`🎱 প্রশ্ন: ${args.join(" ")}\n\n👉 উত্তর: ${answer}`);
  }
};
