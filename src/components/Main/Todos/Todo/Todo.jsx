import React from "react";
import classes from "./todo.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  openAddWindow,
  openUpdateWindow,
} from "../../../../redux/reducer";
import PropTypes from 'prop-types';

function Todo(props) {
  const dispatch = useDispatch();
  const deleted = useSelector((state) => state.deleted);

  const handleOpenAddWindow = () => {
    dispatch(openAddWindow());
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleOpenUpdateWindow = (value, id) => {
    dispatch(openUpdateWindow(value, id));
  };

  return (
    <div className={classes.todo}>
      <ul>
        <li>
          <div>{props.todo.title}</div>
          <div className={classes.buttons}>
            <button className={classes.add} onClick={handleOpenAddWindow}>
              Добавить
            </button>
            <button
              className={classes.update}
              onClick={() =>
                handleOpenUpdateWindow(props.todo.title, props.todo.id)
              }
            >
              Изменить
            </button>
            <button
              className={classes.delete}
              onClick={() => handleDeleteTodo(props.todo.id)}
              disabled={deleted}
            >
              Удалить
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.object.isRequired
}
export default Todo