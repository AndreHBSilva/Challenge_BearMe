import { useEffect } from 'react';
import youtubeAPI from '../../api/youtube';

export default function MeditacaoASMR(props) {
  // const [search, setSearch] = useState({});

  useEffect(() => {
    const onSearch = async () => {
      const response = await youtubeAPI.get("/search", {
        params: {
          q: "meditação ASMR"
        }
      });
  
      console.log(response);
    }
    
    onSearch();
  }, []);

  return(
    <>
    </>
  )
}