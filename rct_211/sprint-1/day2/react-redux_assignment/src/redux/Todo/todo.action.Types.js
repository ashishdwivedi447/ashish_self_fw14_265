import axios from "axios";

export const GET_TODO_LOADING = "GET_TODO_LOADING";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_ERROR = "GET_TODO_ERROR";

export const ADD_TODO_LOADING = "ADD_TODO_LOADING";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const GET_TODO_SINGLE = "GET_TODO_SINGLE";

export const DELETE_TODO_LOADING = "DELETE_TODO_LOADING";

export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";

export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";

export const loadingTodo = () => {
  return { type: GET_TODO_LOADING };
};

export const successTodo = (data) => {
  return { type: GET_TODO_SUCCESS, payload: data };
};
export const errorTodo = () => {
  return { type: GET_TODO_ERROR };
};

export const deleteTodoLoading=()=>{
  return {type:DELETE_TODO_LOADING}
}

export const deleteTodoSuccess=(payload)=>{
  return {type:DELETE_TODO_SUCCESS,payload}
}
export const deleteTodoError=()=>{
  return {type:DELETE_TODO_ERROR}
}

export const Getdata = (dispatch) => {
  dispatch(loadingTodo());
  axios
    .get("")
    .then((res) => {
      dispatch(successTodo(res.data));
    })
    .catch((er) => dispatch(errorTodo()));
  console.log("getdata clles");
};

export const addTodo = (dispatch, payload) => {
  dispatch({ type: ADD_TODO_LOADING });

  axios
    .post("", payload)
    .then((res) => {
      dispatch({ type: ADD_TODO_SUCCESS, payload }, console.log(res.data));
    })
    .then((res) => Getdata(dispatch))
    .catch((er) => {
      dispatch({ type: ADD_TODO_ERROR });
    });
};

export const getSingleTodo = (dispatch, id) => {
  axios
    .get(`/${id}`)
    .then((res) => dispatch({ type: GET_TODO_SINGLE, payload: res.data }));
};

export const updateTodo = (dispatch, payload) => {
  axios
    .patch(`/${payload.id}`, payload)
    .then((res) => console.log(res.data))
    .then((res) => {
      Getdata(dispatch);
    });
};

export const deleteTodo = (dispatch, id) => {
  deleteTodoLoading()
  axios.delete(`/${id}`).then((res) =>dispatch(deleteTodoSuccess(id))).catch((er)=>dispatch(deleteTodoError(er)))
};
