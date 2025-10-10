import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

console.log("🤖 Bot is running...");

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase() || "";

  console.log(`Pesan dari ${msg.from.username || "user"}: ${text}`);

  if (text.includes("halo") || text.includes("hai")) {
    bot.sendMessage(chatId, "Hai! 👋 Ada yang bisa aku bantu?");
  } else if (text.includes("siapa kamu")) {
    bot.sendMessage(chatId, "Aku bot auto-reply buatan Jack 😎");
  } else {
    bot.sendMessage(chatId, "Aku belum paham maksudmu 😅");
  }
});
