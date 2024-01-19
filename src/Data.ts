export interface ITodo {
    id: number;
    text: string;
}

interface ITodoList {
    today: ITodo[];
    tomorrow: ITodo[];
}

export const ToDoList: ITodoList = {
    today: [
        { id: 1, text: "Полить цветы" },
        { id: 2, text: "Помыть машину" },
        { id: 3, text: "Выкинуть мусор" },
    ],
    tomorrow: [],
};