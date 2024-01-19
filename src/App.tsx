import React, { useEffect, useState } from "react";
import ListComponent from "./Components/ListComponent";
import { ITodo, ToDoList } from "./Data";

const App = () => {
  const [todosForToday, setTodosForToday] = useState<ITodo[]>([]);
  const [todosForTomorrow, setTodosForTomorrow] = useState<ITodo[]>([]);
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    setTodosForToday(ToDoList.today);
    setTodosForTomorrow(ToDoList.tomorrow);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleTodoAdd = (when: "today" | "tomorrow") => () => {
    console.log(when);
    if (when === "today") {
      setTodosForToday((old) => [
        ...old,
        {
          id: old.length + 1,
          text: todoText,
        },
      ]);
    } else {
      setTodosForTomorrow((old) => [
        ...old,
        {
          id: old.length + 1,
          text: todoText,
        },
      ]);
    }
  };

  const handleTodoDelete = (when: "today" | "tomorrow") => () => {
    console.log("handleTodoDelete called");
    if (when === "today") {
      setTodosForToday((old) => {
        console.log("setTodosForToday called");
        old.pop();
        return [...old];
      });
    } else {
      setTodosForTomorrow((old) => {
        console.log("setTodosForTomorrow called");
        old.pop();
        return [...old];
      });
    }
  };

  return (
    <div>
      <h2>Сегодня:</h2>
      <div>
        <ListComponent todos={todosForToday} />
        <button onClick={handleTodoDelete("today")}>Удалить</button>
        <input title="today" onChange={handleInputChange} />
        <button onClick={handleTodoAdd("today")}>Добавить</button>
      </div>

      <h2>Завтра:</h2>
      <div>
        <ListComponent todos={todosForTomorrow} />
        <button onClick={handleTodoDelete("tomorrow")}>Удалить</button>
        <input title="tomorrow" onChange={handleInputChange} />
        <button onClick={handleTodoAdd("tomorrow")}>Добавить</button>
      </div>
    </div>
  );
};

export default App;
