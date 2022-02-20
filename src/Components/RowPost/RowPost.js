import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import {IMAGE_URL,API_KEY} from '../../constants/constants'
import YouTube from "react-youtube";
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network error')
    });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovies = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length!==0 )
      {
        setUrlId(response.data.results[0])
      }
     else{
       console.log('trailor  not available')
     }
    })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=>handleMovies(obj.id)}
          className={props.isSmall ? 'smallPoster' : 'poster'}
          alt="poster"
          src={`${IMAGE_URL+obj.backdrop_path}`}
        ></img>
        )}
      </div>
       { urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
