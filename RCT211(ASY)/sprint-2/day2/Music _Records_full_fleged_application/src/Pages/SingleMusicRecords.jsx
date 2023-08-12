import React ,{useState,useEffect}from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getMusicRecords } from '../Redux/AppReducer/action'
import { useParams ,Link} from 'react-router-dom'

const SingleMusicRecords = () => {

  const {id}=useParams()
  const musicRecords=useSelector((store)=>store.AppReducer.musicRecords)
  const [currentMusicAlbum,setCurrentmusicAlbum]=useState({})
  const dispatch=useDispatch()

  useEffect(()=>{
    if(musicRecords?.length===0){
      dispatch((getMusicRecords()))
    }
    },[musicRecords?.length,dispatch])

    useEffect(()=>{
      if(id){
       let currentMusic=musicRecords?.find((album)=>album.id===(id))
     
        currentMusic && setCurrentmusicAlbum(currentMusic);
      }
     },[musicRecords,id])
     console.log(musicRecords)
     console.log(currentMusicAlbum);
  return (
    <div>
      <div>{currentMusicAlbum.name}</div>
      <div><img src={currentMusicAlbum.img} alt="" /></div>
      <div>{currentMusicAlbum.genre}</div>
      <div>{currentMusicAlbum.year}</div>

      <Link to={`/music/${id}/edit`}>Edit</Link>
    </div>
  )
}

export default SingleMusicRecords