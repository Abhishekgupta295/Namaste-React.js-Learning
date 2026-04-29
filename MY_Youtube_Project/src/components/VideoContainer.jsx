import React, { useEffect , useState} from 'react'

import { YOUTUBE_API } from '../utils/Constants'
import VedioCard from './VedioCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [vedios, setVedios] = useState([]);

  useEffect(() => {
  const fetchVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const response = await data.json();
      setVedios(response.items);
    } catch (err) {
      console.error("Failed to fetch videos", err);
    }
  };

  fetchVideos();
}, []);

  return (
    <div className='flex flex-wrap gap-4 overflow-x-hidden'>
      { vedios.length > 0 && vedios.map((vedio) => 
      <Link to={"/watch?v=" + vedio.id}>
      <VedioCard key = {vedio.id} info={vedio} />
      </Link>
      )}
      
    </div>
  )
}

export default VideoContainer