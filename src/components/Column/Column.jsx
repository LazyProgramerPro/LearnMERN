import Task from "components/Task/Task";
import React from "react";
import "./Column.scss";

export default function Column() {
  return (
    <div className="column">
      <header>Brainstom</header>
      <ul className="task-list">

       <Task />
      </ul>
      <footer>Another Card</footer>
    </div>
  );
}
