import * as types from "./actionTypes";

const initialState={
    jobs:[],
    isLoading:false,
    isError:false,
}


export const reducer=(state=initialState,action)=>{
const {type,payload}=action;

switch(type){
    case types.GET_DATA_FAILURE:
        return {
            ...state,
            isLoading:true,
            isError:false
        }

        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                jobs:payload,
                isLoading:false,
                isError:false
            }
            case types.GET_DATA_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isError:false
                }

                case types.POST_DATA_REQUEST :
                    return{
                        ...state,
                        isLoading:false,
                        isError:false,
                    }

                    case types.POST_DATA_SUCCESS :
                        return{
                            ...state,
                            jobs:[...state.jobs,payload],
                            isLoading:false,
                            isError:false,
                        }
                        case types.POST_DATA_REQUEST :
                            return{
                                ...state,
                                isLoading:false,
                                isError:false,
                            }
    default:
        return state
}
}