
import * as types from "./actionTypes";

const initialState={
    isAuth:false,
    isLoding:false,
    isError:false,
    token:"",
}

export const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isAuth:false,
                isLoding:false,
                isError:false,
            }

            case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth:true,
                token:payload
            }
            case types.LOGIN_FAILURE:
            return {
                ...state,
                isError:true,
            }
        default:
            return state
    }
}