import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./auth.action";

const initState = {
  token: loadData("token") || "",
  isAuth: !!loadData("token") || false,
  loading: false,
  error: false,
};

export const authReduser = (state=initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, loading: true ,error:false};

    case LOGIN_SUCCESS:
      saveData("token", payload);
      console.log(payload,"payload")
      return { ...state, token: payload, loading: false,error:false,isAuth:true };

      case LOGIN_ERROR:
        return {...state,loading:false,error:true}
    default:
      return state;
  }
};
