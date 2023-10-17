import axios from 'axios';

export const BASE_URL = 'https://theaudiodb.p.rapidapi.com/playlist.php';

const options = {
  method: 'GET',
  params: {format: 'track'},
  headers: {
    'X-RapidAPI-Key': '2b6e9f80dbmsha4a7a638da8afe1p1bef4ajsn8dc5d99c2419',
    'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
  }
};

export const FetchApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
  
    return data;
  };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }