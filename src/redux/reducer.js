const initialState = {
  items: [],
  loading: false,
  addWindowOpen: false,
  add: false,
  deleted: false,
  updateWindowOpen: false,
  valueUpdate: "",
  updateId: null,
  update: false,
  searchText: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/load/start":
      return {
        ...state,
        loading: true,
      };
    case "todos/load/success":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "add/window/open":
      return {
        ...state,
        addWindowOpen: true,
      };
    case "add/window/close":
      return {
        ...state,
        addWindowOpen: false,
        add: false,
      };
    case "add/todo/success":
      return {
        ...state,
        items: [...state.items, action.payload],
        add: true,
      };
    case "delete/load/start":
      return {
        ...state,
        deleted: true,
      };
    case "delete/load/success":
      return {
        ...state,
        items: state.items.filter((item) => {
          if (item.id === action.payload) {
            return false;
          }
          return item;
        }),
        deleted: false,
      };
    case "update/modal/open":
      return {
        ...state,
        updateWindowOpen: true,
        valueUpdate: action.text,
        updateId: action.id,
      };
    case "update/modal/close":
      return {
        ...state,
        updateWindowOpen: false,
        update: false,
      };
    case "update/text":
      return {
        ...state,
        valueUpdate: action.text,
      };
    case "update/load/success":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return action.payload;
          }
          return item;
        }),
        valueUpdate: "",
        update: true,
      };
    case "search":
      return {
        ...state,
        searchText: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

//Actions
export const loadTodos = () => {
  return (dispatch) => {
    dispatch({ type: "todos/load/start" });

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "todos/load/success",
          payload: json,
          error: false,
        });
      });
  };
};
export const openAddWindow = () => {
  return {
    type: "add/window/open",
  };
};
export const closeAddWindow = () => {
  return {
    type: "add/window/close",
  };
};

export const addTodo = (text, id) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        id: id + 1,
        title: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "add/todo/success",
          payload: json,
          id: id,
        });
      });
  };
};
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({ type: "delete/load/start" });
    fetch(`https://jsonplaceholder.typicode.com/todos/?id=${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "delete/load/success",
          payload: id,
        });
      });
  };
};
export const openUpdateWindow = (value, id) => {
  return {
    type: "update/modal/open",
    text: value,
    id: id,
  };
};
export const closeUpdateWindow = () => {
  return {
    type: "update/modal/close",
  };
};
export const updateText = (text) => {
  return {
    type: "update/text",
    text: text,
  };
};
export const updatePost = (text, id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "update/load/success",
          payload: json,
          id: id,
        });
      });
  };
};
export const searchPost = (text) => {
  return {
    type: 'search',
    payload: text
  }
}