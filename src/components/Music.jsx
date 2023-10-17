import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchApi } from "../utils/FetchApi";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Music = () => {
  const [music, setMusic] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const { id } = useParams();


  // const tokenUrl = 'https://accounts.spotify.com/api/token';
  // const playlistsUrl = 'https://api.spotify.com/v1/playlists/37i9dQZF1DXbTop77dnX35/tracks';
  // var client_id = 'cebd6af3bb2a4a239efc5b8be7ba8a58';
  // var client_secret = 'ea34110380aa47ad9ea6567724a00db3';
  

 useEffect(() => {
     async function fetchData() {
      try {
        const tokenResponse = await fetch(tokenUrl, {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 'grant_type=client_credentials',
        });
        const token = await tokenResponse.json();
        
        const response = await fetch(playlistsUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const data = await response.json();
        console.log(data.items);
        setMusic(data.items);
        setIsLoading(false);

      } catch (error) {
        console.error(error);
      }
    }


    fetchData();
  }, [playlistsUrl]);

  const displayTodoSkeletonLoader = () => (
    <Skeleton count={10} height={100} />
  )
  


  return (
    <div>
      <h1 className="font-bold text-4xl">My music !.</h1>
      <div>
        { music.length > 0 && music.map((item, idex) => (
          <div>
            <li key={idex}>
              {item?.track?.name}
             </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
