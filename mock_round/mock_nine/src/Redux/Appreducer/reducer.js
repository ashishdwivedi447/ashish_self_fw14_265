import * as types from "./actionTypes"

const initialState={
    restaurant:[],
    isLoading:false,
    isError:false,
}


export const reducer=(state=initialState,action)=>{
    const {type,payload}=action;

    switch(type){
        case types.GET_RESTURANT_REQUEST :
            return {
                ...state,
                isLoading:true,
                isError:false,
            }

            case types.GET_RESTURANT_SUCCESS :
                return {
                    ...state,
                    restaurant:[...payload],
                    isLoading:false,
                    isError:false,
                }

                case types.GET_RESTURANT_REQUEST :
                    return {
                        ...state,
                        isLoading:false,
                        isError:true,
                    }
        default:
            return state;
    }
}