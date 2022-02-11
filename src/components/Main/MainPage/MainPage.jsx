import React from "react";
import classes from "./mainPage.module.css";

function MainPage(props) {
  return (
    <div>
      <h1>Todos</h1>
      <p>
        Тестовое задание от компании: welbeX.
        <br />
        Время выполнения: 3 часа!
        <br />
        Выполнил основные требования:
        <br />
        - Приложение содержит две страницы: главная и список todos!
        <br />
        -Переход между страницами реалезован через navbar!
        <br />
        - На главной лого и описание.
        <br />
        - Сделал интерактивный список
        <br />
        - Данны взяты с https://jsonplaceholder.typicode.com/todos
        <br />
        - реализована возможность добавления/изменения/удаления todo
        <br />
        - Добавлен роутинг
        <br />
        - Так же от себя добавил поиск и спин на загрузку данных
        <br/>
        Библиотеки: redux, react-redux, redux-thunk, redux-logger, react-router-dom, react-loadint, prettier, prop-types!
      </p>
      <h1>Спасибо за внимание!</h1>
    </div>
  );
}

export default MainPage