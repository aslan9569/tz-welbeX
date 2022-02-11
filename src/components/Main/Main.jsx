import React from "react";
import classes from "./main.module.css";
import { Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Todos from "./Todos/Todos";

function Main(props) {
  return (
    <main>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/todos" exact>
        <Todos />
      </Route>
    </main>
  );
}

export default Main