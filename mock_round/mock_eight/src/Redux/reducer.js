import * as types from "./actionTypes";
const initialState={
    hotel:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState ,action)=>{
    const {type,payload}=action;

    switch(type){
        case types.POST_HOTEL_REQUEST :
            return {
               ...state,
               isLoading:true,
               isError:false,
            }

            case types.POST_HOTEL_REQUEST :
                return {
                   ...state,
                   hotel:[...state.hotel,payload],
                   isLoading:false,
                   isError:false,
                }
                case types.POST_HOTEL_REQUEST :
                    return {
                       ...state,
                       isLoading:false,
                       isError:true,
                    }
        default:
            return state
    }
}