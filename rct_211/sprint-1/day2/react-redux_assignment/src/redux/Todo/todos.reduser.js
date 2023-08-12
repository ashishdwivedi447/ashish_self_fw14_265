import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SINGLE,
  GET_TODO_SUCCESS,
} from "./todo.action.Types";

const initState = {
  todos: [],
  singleTodo: {},
  nonCompleted: 0,
  getTodo: {
    loading: false,
    error: false,
  },
  addTodo: {
    loading: false,
    error: false,
  },
  deleteTodo: {
    loading: false,
    error: false,
  },
};

export const todosReduser = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING:
      return {
        ...state,
        getTodo: { ...state.getTodo, loading: true, error: false },
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        getTodo: { ...state.getTodo, loading: false, error: false },
        todos: [...payload],
        nonCompleted: payload.filter((e) => e.state === false).length,
      };

    case GET_TODO_ERROR:
      return {
        ...state,
        getTodo: { ...state.getTodo, loading: false, error: true },
      };
    case GET_TODO_SINGLE:
      return { ...state, singleTodo: payload };

    case ADD_TODO_LOADING:
      return {
        ...state,
        addTodo: { ...state.addTodo, loading: true, error: false },
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        addTodo: { ...state.addTodo, loading: false, error: false },
        todos: [...state.todos, payload],
      };

    case ADD_TODO_ERROR:
      return {
        ...state,
        addTodo: { ...state.addTodo, loading: false, error: true },
      };

    case DELETE_TODO_LOADING:
      return {
        ...state,
        deleteTodo: { ...state.deleteTodo, loading: true, error: false },
      };

    case DELETE_TODO_SUCCESS:
      let updatedata = state.todos.filter((e) => e.id !== payload);
      return {
        ...state,
        deleteTodo: { ...state.deleteTodo, loading: false, error: false },
        todos: updatedata,
        nonCompleted: updatedata.filter((e) => e.state === false).length,
      };
    default:
      return state;
  }
};
