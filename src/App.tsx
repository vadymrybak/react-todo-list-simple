import React, { useEffect, useState } from "react";
import ListComponent from "./Components/ListComponent";
import { ITodo, ITodoList, ToDoList } from "./Data";

interface ITodoTexts {
  today: string;
  tomorrow: string;
}

type When = "today" | "tomorrow";

const App = () => {
  const [appData, setAppData] = useState<ITodoList>(() => ({ today: [], tomorrow: [] }));
  const [todoTexts, setTodoTexts] = useState<ITodoTexts>(() => ({ today: "", tomorrow: "" }));

  useEffect(() => {
    setAppData({
      today: ToDoList.today,
      tomorrow: ToDoList.tomorrow
    });
  }, []);

  const handleInputChange = (when: When) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTexts(oldState => {
      if (when === "today") {
        return {
          ...oldState,
          today: e.target.value
        }
      }
      else {
        return {
          ...oldState,
          tomorrow: e.target.value
        }
      }
    });
  };

  const handleTodoAdd = (when: When) => () => {
    if (when === "today") {
      setAppData(oldValue => {
        return {
          ...oldValue,
          today: [...oldValue.today,
          {
            id: oldValue.today.length + 1,
            text: todoTexts.today,
          }],
        }
      });
    }
    else {
      setAppData(oldValue => {
        return {
          ...oldValue,
          tomorrow: [...oldValue.tomorrow,
          {
            id: oldValue.tomorrow.length + 1,
            text: todoTexts.tomorrow,
          }],
        }
      });
    }
  };

  const handleTodoDelete = (when: "today" | "tomorrow") => () => {
    if (when === "today") {
      setAppData(oldValue => {
        oldValue.today.pop();
        return {
          ...oldValue,
          today: [...oldValue.today]
        }
      })
    } else {
      setAppData(oldValue => {
        oldValue.tomorrow.pop();
        return {
          ...oldValue,
          totomorrowday: [...oldValue.tomorrow]
        }
      })
    }
  };

  return (
    <div>
      <h2>Сегодня:</h2>
      <div>
        <ListComponent todos={appData.today} />
        <button onClick={handleTodoDelete("today")}>Удалить</button>
        <input title="today" onChange={handleInputChange("today")} />
        <button onClick={handleTodoAdd("today")}>Добавить</button>
      </div>

      <h2>Завтра:</h2>
      <div>
        <ListComponent todos={appData.tomorrow} />
        <button onClick={handleTodoDelete("tomorrow")}>Удалить</button>
        <input title="tomorrow" onChange={handleInputChange("tomorrow")} />
        <button onClick={handleTodoAdd("tomorrow")}>Добавить</button>
      </div>
    </div>
  );
};

export default App;
