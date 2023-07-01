import React from 'react'
import { useEffect,useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import youtube from 'react-youtube'
import {imageUrl} from '../../constants/constants'
function RowPost(props) {
  const[movies,setmovies]=useState([])
  useEffect(() =>{
      axios.get(props.url).then((response)=>{
        console.log(response.data)
        setmovies(response.data.results)
      })
  },[])
  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };






  return (
    <div className='row'>
         <h2>{props.title}</h2>
         <div className='posters'>
          {movies.map((obj)=>
          <img className={props.isSmall ?'poster' :'poster'}   src={`${imageUrl+obj.backdrop_path}`} alt='poster'/>


        )}
          
           
           
           

           
          </div>
          <youtube opts={opts} videoId="2g811Eo7K8U"/>
    </div>
  )}
  export default RowPost

