
import * as types from "./actionTypes"
const initialState={
    musicRecords:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,action)=>{
    const {type,payload}=action

    switch(type){
        case types.GET_MUSIC_RECORDS_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }

            case types.GET_MUSIC_RECORDS_SUCCESS:
                return {
                    ...state,
                     musicRecords:payload,
                    isLoading:false,
                    isError:false
                }

                case types.GET_MUSIC_RECORDS_REQUEST:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
        default:
            return state
    }
}