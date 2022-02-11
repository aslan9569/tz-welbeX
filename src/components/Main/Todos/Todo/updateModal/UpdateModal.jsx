import React from "react";
import classes from "./update.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  closeUpdateWindow,
  updatePost,
  updateText,
} from "../../../../../redux/reducer";

function UpdateModal(props) {
  const dispatch = useDispatch();
  const valueUpdate = useSelector((state) => state.valueUpdate);
  const updateId = useSelector((state) => state.updateId);
  const update = useSelector((state) => state.update);
  const handleCloseUpdateWindow = () => {
    dispatch(closeUpdateWindow());
  };
  const handleUpdateTodo = (e) => {
    dispatch(updateText(e.target.value));
  };
  const handleUpdatePost = (text, id) => {
    dispatch(updatePost(text, id));
  };

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.close}>
          <FontAwesomeIcon icon={faXmark} onClick={handleCloseUpdateWindow} />
        </div>
        <h3>Добавить TODO</h3>
        <div className={classes.form}>
          <input
            type="text"
            placeholder="Введите значение"
            value={valueUpdate}
            onChange={handleUpdateTodo}
          />

          <button onClick={() => handleUpdatePost(valueUpdate, updateId)}>
            Изменить
          </button>
          {update ? <div className={classes.changed}>Изменено</div> : false}
        </div>
      </div>
    </div>
  );
}

export default UpdateModal