import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMusicRecords, updatemusicRecord } from '../Redux/AppReducer/action'
import { GET_MUSIC_RECORDS_SUCCESS } from '../Redux/AppReducer/actionTypes'

const EditMusicRecords = () => {
  const {id}=useParams()
 
  const musicRecords=useSelector((store)=>store.AppReducer.musicRecords)
  const [musicName,setMusicName]=useState("");
  const [artistName,setArtistName]=useState("")
  const dispatch=useDispatch();
const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
   console.log(musicName,artistName);
   
    if(musicName && artistName){

      const payload={
        name:musicName,
        artist:artistName,
      }
      
     console.log(payload);
      dispatch(updatemusicRecord(id,payload))
      
      .then(()=>dispatch(getMusicRecords()))
      .then((res)=>{
        if(res.type=GET_MUSIC_RECORDS_SUCCESS){
  navigate("/")
        }
      })
    }
   
   }

  useEffect(()=>{
    if(id){
     let currentMusic=musicRecords?.find((album)=>album.id===(id))
   
      if(currentMusic){
        setMusicName(currentMusic.name);
        setArtistName(currentMusic.artist)
      }
    }
   },[musicRecords,id])

 //console.log(musicName,artistName);
 
  return (
    <div>
      <h3>Edit Page</h3>
      <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Edit Music Name</label>
        <input type="text" value={musicName} onChange={(e)=>setMusicName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Edit Artist Name</label>
        <input type="text" value={artistName} onChange={(e)=>setArtistName(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditMusicRecords