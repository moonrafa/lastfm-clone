const API_KEY = 'b245ec7acd2168f95ba68b4a5ad865da'
const requests = {
  fetchTopAlbums: `?method=artist.gettopalbums&artist=twice&api_key=${API_KEY}&format=json`,
  fetchChartTopArtists: `?method=chart.gettopartists&api_key=${API_KEY}&format=json`,
  fetchChartTopTracks: `?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
  fetch90sAlbums: `?method=tag.gettopalbums&tag=90s&api_key=${API_KEY}&format=json`,
  fetchMyArtists: `?method=library.getartists&api_key=${API_KEY}&user=asoftuniverse&format=json`,
  fetchKpopAlbums: `?method=tag.gettopalbums&tag=kpop&api_key=${API_KEY}&format=json`,
  fetchAlternativeAlbums: `?method=tag.gettopalbums&tag=alternative&api_key=${API_KEY}&format=json`,
  fetchJpopAlbums: `?method=tag.gettopalbums&tag=jpop&api_key=${API_KEY}&format=json`,
  fetchPopAlbums: `?method=tag.gettopalbums&tag=pop&api_key=${API_KEY}&format=json`
}
export default requests
