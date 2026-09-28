const fs = require("fs");
const path = require("path");

const CONFIG_FILE = path.join(__dirname, "..", "..", "welcomeconfig.json");

function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));
    }
  } catch (e) {}
  return {
    enabled: true,
    message: "🌸 স্বাগতম {name} 🌸\n\n𝐔𝐧𝐦𝐚𝐫𝐫𝐢𝐞𝐝 𝐀𝐬𝐬𝐨𝐜𝐢𝐚𝐭𝐢𝐨𝐧 🙂💔 এ তোমাকে স্বাগতম!"
  };
}

module.exports = {
  config: {
    name: "welcome",
    eventType: ["log:subscribe"],
    version: "1.0",
    author: "You"
  },

  onStart: async function ({ event, api }) {
    const cfg = loadConfig();
    if (!cfg.enabled) return;

    const added = event.logMessageData.addedParticipants;
    if (!added || added.length === 0) return;

    for (const user of added) {
      const name = user.fullName;
      const uid = user.userFbId;

      if (String(uid) === String(api.getCurrentUserID())) continue;

      let text = cfg.message
        .replace(/{name}/g, name)
        .replace(/{uid}/g, uid);

      try {
        const threadInfo = await api.getThreadInfo(event.threadID);
        text = text.replace(/{group}/g, threadInfo.threadName || "আমাদের গ্রুপ");
      } catch (e) {}

      try {
        await api.sendMessage(
          {
            body: text,
            mentions: [{ tag: name, id: uid }]
          },
          event.threadID
        );
      } catch (e) {
        console.log("Welcome error:", e);
      }
    }
  }
};
