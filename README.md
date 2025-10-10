# auto-reply-telegram
🤖 A lightweight Telegram auto-reply bot built with Node.js — fast, simple, and easy to customize.

1. Prasyarat

Node.js (rekomendasi: Node 16+)

npm (biasanya ikut Node)

Akun Telegram

2. Clone repository
git clone https://github.com/yourusername/auto-reply-telegram.git
cd auto-reply-telegram


(Ganti yourusername dengan username GitHubmu — atau cukup extract ZIP yang sudah kubuat.)

3. Install dependencies
npm install

4. Dapatkan token bot dari BotFather

Buka Telegram → cari @BotFather.

Ketik /newbot lalu ikuti instruksi (beri nama, beri username yang diakhiri bot).

Salin HTTP API token yang diberikan (contoh: 123456789:ABCDefgh...).

5. Konfigurasi environment

Buat file .env di folder project (atau salin .env.example):

cp .env.example .env     # Linux / macOS
# atau untuk Windows PowerShell:
# copy .env.example .env


Isi BOT_TOKEN di .env dengan token dari BotFather:

BOT_TOKEN=123456789:ABCDefgh...


PENTING: jangan commit file .env ke GitHub — sudah ada .gitignore yang menyertakan .env.

6. Jalankan bot (lokal)
npm start


Jika sukses, konsol akan menampilkan:

🤖 Bot is running...


Sekarang buka Telegram dan kirim pesan ke bot (username yang kamu buat). Bot akan membalas sesuai logika yang ada.

7. Contoh menambahkan command (/start, /help)

Tambahkan potongan ini di index.js (atau modifikasi sesuai kebutuhan):

// command /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Selamat datang! Ketik 'halo' untuk mencoba.");
});

// command /help
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "Perintah yang tersedia:\n/start - Mulai\n/help - Bantuan\nKetik 'halo' untuk uji coba.");
});

8. Menjalankan di background / production

Pilihan cepat untuk produksi:

PM2 (VPS):

npm install -g pm2
pm2 start index.js --name auto-reply-telegram
pm2 save
pm2 startup


Ikuti instruksi pm2 startup untuk konfigurasi autostart.

Docker (contoh Dockerfile):

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["node", "index.js"]


Build & run:

docker build -t auto-reply-telegram .
docker run -d --env-file .env --name auto-reply auto-reply-telegram


Platform cloud: Replit, Railway, Render, dll. Umumnya upload/clone repo, set secret environment variable BOT_TOKEN, lalu jalankan npm start.

9. Keamanan & best practices

Jangan publish token. Jika token bocor, regenerate di BotFather.

Simpan kredensial di environment variables (bukan di file kode yang dipush).

Untuk bot yang menerima dan menyimpan data, gunakan database (SQLite / MongoDB / PostgreSQL) dan amankan input pengguna.

Untuk skala, pertimbangkan webhook (lebih efisien daripada polling) — tapi webhook memerlukan HTTPS dan endpoint publik.

10. Troubleshooting umum

Bot tidak merespon?

Pastikan token benar (404/401 error → token salah).

Pastikan bot telah di-start (npm start) dan tidak crash.

Cek log console untuk error.

Bot tidak menerima pesan di grup?

Periksa privacy mode di @BotFather (/setprivacy) — disable jika mau bot baca semua pesan di grup.

Error saat npm install

Pastikan Node/npm terinstall dan versinya kompatibel.

11. Ide pengembangan selanjutnya

Simpan history chat ke database.

Tambah natural language processing sederhana (keyword, regex).

Tambah inline keyboard / reply keyboard (untuk pilihan cepat).

Integrasi dengan API eksternal (cuaca, reminder, dsb).
