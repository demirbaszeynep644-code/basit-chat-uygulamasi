// index.js (Sunucu)

// Gerekli Kütüphaneleri Dahil Etme
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

// Socket.IO'yu kuruyoruz. CORS ile farklı domainlerden erişimi açıyoruz.
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

// ----------------------------------------------------
// 1. Statik Dosyalar (Frontend) İçin Yönlendirme
// ----------------------------------------------------

// Uygulamanın anasayfasına (/) gelen isteklere 'index.html' dosyasını gönder.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// ----------------------------------------------------
// 2. Gerçek Zamanlı İletişim (WebSocket/Socket.IO)
// ----------------------------------------------------

// Bir kullanıcı sunucuya bağlandığında çalışır
io.on('connection', (socket) => {
  console.log('Yeni bir kullanıcı bağlandı'); 

  // Kullanıcı bağlantıyı kestiğinde çalışır
  socket.on('disconnect', () => {
    console.log('Bir kullanıcı ayrıldı');
  });

  // 'chat message' adında bir olay (event) geldiğinde çalışır
  socket.on('chat message', (msg) => {
    console.log('Mesaj: ' + msg); 
    
    // Mesajı, kendisi dahil, bağlı olan herkese geri gönder
    io.emit('chat message', msg);
  });
});

// ----------------------------------------------------
// 3. Sunucuyu Başlatma
// ----------------------------------------------------

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});

