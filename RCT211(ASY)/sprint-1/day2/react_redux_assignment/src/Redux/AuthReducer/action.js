import * as types from "./actionTypes";

const loginrequest = () => {
 return {
    type:types.LOGIN_REQUEST
 }
};

const loginsuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

const loginfailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };
};

export { loginrequest, loginsuccess, loginfailure };
