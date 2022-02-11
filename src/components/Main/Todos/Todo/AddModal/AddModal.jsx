import React, { useState } from "react";
import classes from "./addModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, closeAddWindow } from "../../../../../redux/reducer";

function AddModal(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const id = useSelector((state) => state.items.length);
  const add = useSelector((state) => state.add);

  const handleCloseAddWindow = () => {
    dispatch(closeAddWindow());
  };

  const handleAddTodo = (text, id) => {
    dispatch(addTodo(text, id));
    setText("");
  };

  return (
    <div>
      <div className={classes.modal}>
        <div className={classes.content}>
          <div className={classes.close}>
            <FontAwesomeIcon icon={faXmark} onClick={handleCloseAddWindow} />
          </div>
          <h3>Добавить TODO</h3>
          <div className={classes.form}>
            <input
              type="text"
              placeholder="Введите значение"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button onClick={() => handleAddTodo(text, id)}>Добавить</button>
            {add ? <div className={classes.update}>Добвалено</div> : false}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;