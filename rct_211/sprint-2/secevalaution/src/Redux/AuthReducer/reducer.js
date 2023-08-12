import * as types from "./actionTypes"


const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload}=action
switch(type){
  case types.LOGIN_REQUEST:
   return {
    ...state,
    isLoading:true,
   }
  default:
    return state
}
};
