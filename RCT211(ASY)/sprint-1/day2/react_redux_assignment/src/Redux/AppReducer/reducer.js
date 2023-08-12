import * as types from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, ...payload],
        isLoading: false,
        isError: false,
      };

    case types.ADD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.DELETE_TODOS_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.DELETE_TODOS_SUCCESS:
      let lefttodos = store.todos.filter((item) => item.id !== payload.id);
      console.log(payload);
      return {
        ...state,
        todos: lefttodos,
        isLoading: false,
        isError: false,
      };

    case types.DELETE_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.UPDATE_TODOS_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.UPDATE_TODOS_SUCCESS:
      let updatedtodos = state.todos.map((item) =>
        item.id == payload.id ? payload : item
      );
      return {
        ...state,
        todos: updatedtodos,
        isLoading: false,
        isError: false,
      };

    case types.UPDATE_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
