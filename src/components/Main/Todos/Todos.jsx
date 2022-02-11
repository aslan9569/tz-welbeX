import React, { useEffect } from "react";
import classes from "./todos.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos, searchPost } from "../../../redux/reducer";
import Todo from "./Todo/Todo";
import ReactLoading from "react-loading";
import AddModal from "./Todo/AddModal/AddModal";
import UpdateModal from "./Todo/updateModal/UpdateModal";

function Todos(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.items);
  const loading = useSelector((state) => state.loading);
  const addWindowOpen = useSelector((state) => state.addWindowOpen);
  const updateWindowOpen = useSelector((state) => state.updateWindowOpen);
  const searchText = useSelector((state) => state.searchText);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const handleChange = (e) => {
    dispatch(searchPost(e.target.value));
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <input type="text" placeholder="Поиск" onChange={handleChange} />
      </div>
      <div className={classes.card}>
        {addWindowOpen && <AddModal />}
        {updateWindowOpen && <UpdateModal />}
        {loading ? (
          <div>
            <ReactLoading
              type={"spin"}
              color={"blue"}
              height={20}
              width={20}
              className={classes.loader}
            />
          </div>
        ) : (
          filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
}

export default Todos