# 🎵 Spotify Search API 🎧

[![npm version](https://img.shields.io/npm/v/spoti-rec)](https://www.npmjs.com/package/spoti-rec)
[![license](https://img.shields.io/npm/l/spoti-rec)](https://github.com/michxoo/spoti-rec/blob/main/LICENSE)
[![issues](https://img.shields.io/github/issues/michxoo/spoti-rec)](https://github.com/michxoo/rec/issues)
[![stars](https://img.shields.io/github/stars/michxoo/spoti-rec)](https://github.com/michxoo/spoti-rec/stargazers)


**Spotify Rec** adalah package **Node.js** yang memungkinkan kamu untuk mencari lagu berdasarkan **nama artis** atau **judul lagu** dan memberikan rekomendasi terkait. Hasil pencarian mencakup **link Spotify** dari rekomendasi yang diberikan.

## ✨ Fitur Utama

- 🔍 **Cari Lagu**: Mencari track berdasarkan nama artis atau judul lagu.
- 🎶 **Rekomendasi Otomatis**: Mendapatkan rekomendasi track berdasarkan hasil pencarian.
- 🔗 **Spotify Links**: Mengembalikan tautan langsung ke track rekomendasi di Spotify.

## ⚙️ Prasyarat

Sebelum menggunakan package ini, kamu memerlukan:
1. **Akun Developer Spotify**: Daftar di [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) untuk mendapatkan `client_id` dan `client_secret`.
2. **Node.js**: Pastikan Node.js sudah terinstal di komputermu.

## 🚀 Instalasi

Instal package ini menggunakan npm:

```bash
npm install spoti-api-search
```

## 🛠️ Penggunaan

Berikut ini contoh sederhana cara menggunakan **Spotify Rec**:

```javascript
const SpotifyAutoplay = require('spoti-rec');

const spotifyAutoplay = new SpotifyAutoplay('client_id', 'client_secret');

(async () => {
  const query = 'Henry Moodie - drunk text';
  
  const recommendations = await spotifyAutoplay.getRecommendationsFromTrackName(query);

  console.log('Rekomendasi track:', recommendations);
})();
```

## 📀 Hasil Rekomendasi Track

Hasil yang diperoleh berupa link Spotify dari track yang direkomendasikan:

```bash
Rekomendasi track: [
  'https://open.spotify.com/track/xxxxxxxxxxxxxxxx',
  'https://open.spotify.com/track/xxxxxxxxxxxxxxxx',
  ...
]
```

## 🧑‍💻 Dikembangkan Oleh

Code by michxoo
[Discord](https://discord.com/users/707254056535588924)

## ⚖️ Lisensi

Distribusi project ini dilisensikan di bawah lisensi MIT. Lihat [LICENSE](https://github.com/michxoo/spoti-rec/blob/main/LICENSE) untuk informasi lebih lanjut.