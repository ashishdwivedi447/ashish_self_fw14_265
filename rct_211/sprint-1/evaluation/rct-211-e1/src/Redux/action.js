//Create ActionCreator functions here

import * as types from "./actionTypes";

const getShoesRequest = () => {
    return { type: types. GET_SHOES_REQUEST };
  };
  const getShoesSuccess = (payload) => {
    return { type: types. GET_SHOES_REQUEST, payload };
  };
  const getShoesFailure = (error) => {
    return { type: types. GET_SHOES_REQUEST, payload: error };
  };

  const updateshowcountrequest = () => {
    return { type: types. UPDATE_SHOE_COUNT_REQUEST };
  };
  const updateshowcountsuccess= (payload) => {
    return { type: types. UPDATE_SHOE_COUNT_SUCCESS, payload };
  };
  const updateshowcountfailure = (error) => {
    return { type: types. UPDATE_SHOE_COUNT_FAILURE, payload: error };
  };

  export {getShoesRequest,getShoesSuccess,getShoesFailure,updateshowcountrequest,updateshowcountsuccess,updateshowcountfailure}
  