import { useState, useEffect } from 'react';
import axios from 'axios';
import VideoYoutube from '../videoYoutube/VideoYoutube';

export default function MeditacaoASMR(props) {
  const [search, setSearch] = useState([]);
  let videos;

  useEffect(() => {
    const onSearch = async () => {
  
      const response = await axios.get("/.netlify/functions/youtubeAPI", { headers: { accept: "Accept: application/json" } });
      console.log(response);

      setSearch(JSON.stringify(response.data.items));
    }
    
    onSearch();

  }, []);

  if(search.length !== 0) {
    videos = JSON.parse(search);
    return(
      <div>
        <h1>Vídeos feitos para você relaxar.</h1>
        {videos.map((item, index) => {
          console.log(item);
          return <VideoYoutube videoId={item.id.videoId} key={index} />
        })}
      </div>
    )
  } else {
    return(
      <>
      </>
    )
  }
  
}