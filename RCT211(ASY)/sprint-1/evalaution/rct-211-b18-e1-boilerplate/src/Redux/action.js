// Write the action object creators in this file

import * as types from "./actionTypes";

const getprofilerequest=()=>{
    return {
        type:types.GET_PROFILE_DETAILS_REQUEST
    }
}

const getprofilesuccess=(payload)=>{
    return {
        type:types.GET_PROFILE_DETAILS_SUCCESS,
        payload
    }
}

const getprofilefailure=()=>{
    return {
        type:types.GET_PROFILE_DETAILS_FAILURE
    }
}


export {getprofilerequest,getprofilesuccess,getprofilefailure}