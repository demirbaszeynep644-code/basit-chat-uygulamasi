\# Real-Time Minimalist Chat Application (Node.js \& Socket.io) 💬



\## Proje Genel Bakış



Bu proje, modern web uygulamaları için kritik bir iletişim protokolü olan WebSockets'ı (Socket.io kütüphanesi aracılığıyla) kullanarak geliştirilmiş, gerçek zamanlı, tarayıcı tabanlı bir sohbet uygulamasıdır. Uygulama, iki veya daha fazla istemci arasında düşük gecikmeli, çift yönlü ve anlık iletişimi garanti eder.



\## ⚙️ Teknik Yapı ve Mimarisi



Uygulama, temel olarak 3 ana bileşenden oluşmaktadır:



\### 1. Backend (Sunucu) Katmanı

\* \*\*Platform:\*\* Node.js

\* \*\*Web Çatısı:\*\* Express.js (HTTP sunucusu kurulumu ve statik dosya sunumu için)

\* \*\*WebSocket Kütüphanesi:\*\* Socket.io (Olay tabanlı, gerçek zamanlı iletişim katmanını yönetir.)



Sunucu, gelen her Socket.io bağlantısını (client) izler ve bir client'tan gelen `chat message` olayını, bağlı olan tüm diğer client'lara (`io.emit`) dağıtarak yayınlama (broadcasting) mimarisiyle çalışır.



\### 2. Frontend (İstemci) Katmanı

\* \*\*İstemci Kütüphanesi:\*\* Saf JavaScript

\* \*\*İletişim:\*\* Socket.io client-side kütüphanesi (`/socket.io/socket.io.js`) kullanılarak sunucuya bağlanır ve olayları dinler/yayınlar.

\* \*\*Arayüz:\*\* Minimal HTML ve CSS (Geliştirme kolaylığı için inline stil kullanılmıştır.)



\## 🚀 Yerel Kurulum ve Başlatma



Projeyi makinenizde klonlayıp çalıştırmak için aşağıdaki komut dizisini takip edin.



\### Ön Koşullar



\* Node.js (LTS sürümü önerilir) ve npm kurulu olmalıdır.

\* Git kurulu olmalıdır.



\### Kurulum Adımları



1\.  \*\*Depoyu Klonlayın:\*\*

&nbsp;   ```bash

&nbsp;   git clone \[REPO\_ADRESİNİZİ BURAYA EKLEYİN]

&nbsp;   cd \[REPO\_ADINIZ]

&nbsp;   ```



2\.  \*\*Bağımlılıkları Yükleyin:\*\*

&nbsp;   `package.json` dosyasında tanımlanan tüm backend bağımlılıklarını (Express, Socket.io) yükleyin.

&nbsp;   ```bash

&nbsp;   npm install

&nbsp;   ```



3\.  \*\*Sunucuyu Başlatın:\*\*

&nbsp;   Node.js sunucu dosyasını çalıştırın.

&nbsp;   ```bash

&nbsp;   node index.js

&nbsp;   ```

&nbsp;   Konsolda aşağıdaki çıktıyı görmelisiniz:

&nbsp;   `Sunucu http://localhost:3000 adresinde çalışıyor`



4\.  \*\*Erişim:\*\*

&nbsp;   Web tarayıcınızda `http://localhost:3000` adresine giderek uygulamaya erişin. Gerçek zamanlı iletişimi test etmek için aynı adresi birden fazla sekmede açmanız yeterlidir.



\## ⚠️ Dikkat Edilmesi Gerekenler



\* \*\*Kalıcılık (Persistence):\*\* Bu mimari sadece anlık iletime odaklanmıştır. Mesaj geçmişi herhangi bir veritabanında saklanmaz ve sunucu yeniden başlatıldığında tüm mesajlar kaybolur.

\* \*\*Hata Yönetimi:\*\* Üretim ortamı için uygun olmayan basit bir hata yönetimi yapısı içerir.



---



Geliştirici: \[ADINIZI VEYA KULLANICI ADINIZI BURAYA EKLEYİN]

