# Real-Time Chat Uygulaması (Node.js & Socket.io) 💬

Slogan: Düşük Gecikmeyle Anlık İletişim Kurun!

Bu proje, modern web uygulamaları için kritik bir iletişim protokolü olan WebSockets'ı (Socket.io kütüphanesi aracılığıyla) kullanarak geliştirilmiş minimalist bir chat uygulamasıdır. Uygulama, iki veya daha fazla istemci arasında anlık iletişimi garanti eder.

## ✨ Özellikler

* **Anlık Mesajlaşma:** WebSockets sayesinde mesajlar saniyeler içinde iletilir.
* **Çift Yönlü İletişim:** Sunucu ve istemci arasındaki iletişim tek bir kalıcı bağlantı üzerinden sağlanır.
* **Kolay Kullanım:** Tarayıcı tabanlı arayüz ile ek kurulum gerektirmez.

## 🛠 Teknik Yapı

### Kullanılan Teknolojiler
| Bileşen | Teknoloji | Amaç |
| :--- | :--- | :--- |
| **Backend** | Node.js & Express | Sunucu ortamı ve HTTP yönlendirme. |
| **Real-Time** | Socket.io | WebSocket protokolünün yönetimi. |
| **Frontend** | HTML/CSS/JS | İstemci arayüzü. |

## 🚀 Kurulum ve Başlatma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edin.

### Gereksinimler
* [Node.js](https://nodejs.org/) (ve npm) kurulu olmalıdır.

### Adımlar

1.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

2.  **Sunucuyu Başlatın:**
    ```bash
    node index.js
    ```
    Sunucu, `http://localhost:3000` adresinde çalışmaya başlayacaktır.

---

Made with ❤️ by [demirbaszeynep644]