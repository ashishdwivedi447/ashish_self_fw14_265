
import * as types from "./actionTypes";
import axios from "axios"

export const getMusicRecords=(params)=>async(dispatch)=>{
    dispatch({type:types.GET_MUSIC_RECORDS_REQUEST})
    return axios.get("http://localhost:8080/albums",params)
    .then((r)=>dispatch({type:types.GET_MUSIC_RECORDS_SUCCESS,payload:r.data}))
    .catch((error)=>dispatch({type:types.GET_MUSIC_RECORDS_FAILURE}))
}

export const updatemusicRecord=(id,payload)=>async(dispatch)=>{
    console.log(id)
    console.log(payload)
    dispatch({type:types.UPDATE_MUSIC_RECORD_REQUEST})
    return axios.patch(`http://localhost:8080/albums/${id}`,payload)
    .then((r)=>dispatch({type:types.UPDATE_MUSIC_RECORD_SUCCESS}))
    .catch((error)=>dispatch({type:types.UPDATE_MUSIC_RECORD_FAILURE}))
}