import React, { useEffect, useState, useCallback, useRef } from "react";
import ListComponent from "./Components/ListComponent";
import { ITodoList, ToDoList, When } from "./Data";
import ListControlComponent from "./Components/ListControlComponent";

interface ITodoTexts {
  today: string;
  tomorrow: string;
}

const App = () => {
  const [appData, setAppData] = useState<ITodoList>(() => ({ today: [], tomorrow: [] }));
  const todoTextsNew = useRef<ITodoTexts>({ today: "", tomorrow: "" });

  useEffect(() => {
    setAppData({
      today: ToDoList.today,
      tomorrow: ToDoList.tomorrow
    });
  }, []);

  const handleInputChange = useCallback((when: When, value: string) => {
    todoTextsNew.current[when] = value;
  }, [])

  const handleTodoAdd = useCallback((when: When) => {
    setAppData(oldValue => {
      return {
        ...oldValue,
        [when]: [...oldValue[when],
        {
          id: oldValue[when].length + 1,
          text: todoTextsNew.current[when],
        }],
      }
    });
  }, [])

  const handleTodoDelete = useCallback((when: When) => {
    setAppData(oldValue => {
      oldValue[when].pop();
      return {
        ...oldValue,
        [when]: [...oldValue[when]]
      }
    })
  }, [])

  return (
    <div>
      <h2>Сегодня:</h2>
      <div>
        <ListComponent todos={appData.today} />
        <ListControlComponent
          when="today"
          handleInputChange={handleInputChange}
          handleToDoAdd={handleTodoAdd}
          handleToDoDelete={handleTodoDelete} />
      </div>

      <h2>Завтра:</h2>
      <div>
        <ListComponent todos={appData.tomorrow} />
        <ListControlComponent
          when="tomorrow"
          handleInputChange={handleInputChange}
          handleToDoAdd={handleTodoAdd}
          handleToDoDelete={handleTodoDelete} />
      </div>
    </div>
  );
};

export default App;
