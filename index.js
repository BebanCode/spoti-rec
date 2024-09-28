const SpotifyWebApi = require('spotify-web-api-node');

class SpotifyAutoplay {
  constructor(clientId, clientSecret) {
    this.spotifyApi = new SpotifyWebApi({
      clientId: clientId,
      clientSecret: clientSecret,
    });
    this.accessToken = null; // Store the access token to avoid repeated requests
  }

  async getAccessToken() {
    if (!this.accessToken) {
      try {
        const data = await this.spotifyApi.clientCredentialsGrant();
        this.accessToken = data.body['access_token'];
        this.spotifyApi.setAccessToken(this.accessToken);
        console.log('Access token updated successfully!');
      } catch (error) {
        console.error('Failed to obtain access token!', error);
        throw error;
      }
    }
  }

  async searchTrack(query) {
    try {
      await this.getAccessToken();

      // Search for tracks based on the query (title or artist)
      const searchResult = await this.spotifyApi.searchTracks(query, { limit: 1 });
      const track = searchResult.body.tracks.items[0]; // Get the first track

      if (track) {
        console.log(`Track found: ${track.name} by ${track.artists[0].name}`);
        return track.id; // Get the track ID from the search result
      } else {
        console.log('No matching tracks found!');
        return null;
      }
    } catch (error) {
      console.error('Failed to search for tracks!', error);
      throw error;
    }
  }

  async getTrackRecommendations(trackId) {
    try {
      await this.getAccessToken();

      const recommendations = await this.spotifyApi.getRecommendations({
        seed_tracks: [trackId],
        limit: 5,
      });

      return recommendations.body.tracks.map(track => track.external_urls.spotify);
    } catch (error) {
      console.error('Failed to get track recommendations!', error);
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
        console.log('Failed to find a track for the given query!');
        return [];
      }
    } catch (error) {
      console.error('Failed to get recommendations based on track title!', error);
      throw error;
    }
  }
}

module.exports = SpotifyAutoplay;
