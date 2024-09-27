const SpotifyWebApi = require('spotify-web-api-node');

class SpotifyAutoplay {
  constructor(clientId, clientSecret) {
    this.spotifyApi = new SpotifyWebApi({
      clientId: clientId,
      clientSecret: clientSecret,
    });
  }

  async getAccessToken() {
    try {
      const data = await this.spotifyApi.clientCredentialsGrant();
      const accessToken = data.body['access_token'];
      this.spotifyApi.setAccessToken(accessToken);
      console.log('Token akses berhasil diperbarui!');
    } catch (error) {
      console.error('Gagal mendapatkan token akses!', error);
      throw error;
    }
  }

  async searchTrack(query) {
    try {
      
      await this.getAccessToken();

      // Cari track berdasarkan query (judul atau artis)
      const searchResult = await this.spotifyApi.searchTracks(query, { limit: 1 });
      const track = searchResult.body.tracks.items[0]; // Ambil track pertama

      if (track) {
        console.log(`Track ditemukan: ${track.name} oleh ${track.artists[0].name}`);
        return track.id; // Ambil trackId dari hasil pencarian
      } else {
        console.log('Tidak ada track yang cocok ditemukan!');
        return null;
      }
    } catch (error) {
      console.error('Gagal mencari track!', error);
      throw error;
    }
  }

  async getTrackRecommendations(trackId) {
    try {

      const recommendations = await this.spotifyApi.getRecommendations({
        seed_tracks: [trackId],
        limit: 5,
      });


      return recommendations.body.tracks.map(track => track.external_urls.spotify);
    } catch (error) {
      console.error('Gagal mendapatkan rekomendasi track!', error);
      throw error;
    }
  }


  async getRecommendationsFromTrackName(query) {
    try {

      const trackId = await this.searchTrack(query);

      if (trackId) {

        const recommendations = await this.getTrackRecommendations(trackId);
        return recommendations;
      } else {
        console.log('Tidak dapat menemukan track untuk query yang diberikan!.');
        return [];
      }
    } catch (error) {
      console.error('Gagal mendapatkan rekomendasi berdasarkan judul track!', error);
      throw error;
    }
  }
}

module.exports = SpotifyAutoplay;