# Spotify Search API

Spotify Search API adalah package Node.js untuk mencari track berdasarkan nama artis atau judul track, kemudian memberikan rekomendasi track terkait dan menghasilkan link Spotify dari track-track rekomendasi tersebut. Package ini menggunakan **Client Credentials Flow** dari Spotify untuk mendapatkan akses token.

## Fitur

- Mencari track berdasarkan nama artis atau judul lagu.
- Mendapatkan rekomendasi track berdasarkan track yang ditemukan.
- Mengembalikan link Spotify dari track rekomendasi.

## Prasyarat

Sebelum menggunakan package ini, Anda perlu:
1. Mendaftar aplikasi di [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) untuk mendapatkan `client_id` dan `client_secret`.
2. Menginstal Node.js di komputer Anda.

## Instalasi
   ```bash
   npm install spoti-api-search
   ```

# Penggunaan
```javascript
   const SpotifyAutoplay = require('spoti-api-search');
   
const spotifyAutoplay = new SpotifyAutoplay('client_id', 'client_secret');

(async () => {
  const query = 'Henry Moodie - drunk text';

  const recommendations = await spotifyAutoplay.getRecommendationsFromTrackName(query);

  console.log('Rekomendasi track:', recommendations);
})();
```

# Reseult track
```bash
Rekomendasi track: [
  'https://open.spotify.com/track/xxxxxxxxxxxxxxxx',
  'https://open.spotify.com/track/xxxxxxxxxxxxxxxx',
  ...
]
```

# Code by: michxoo.
[Discord michxo.](https://discord.com/users/https://discord.com/users/707254056535588924)