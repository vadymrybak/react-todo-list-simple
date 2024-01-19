import React, { useEffect } from "react";
import { ITodo } from "../Data";

const ListComponent = React.memo(({ todos }: { todos: ITodo[] }) => {
    console.log("ListComponent RENDER", todos);

    useEffect(() => {
        console.log("ListComponent MOUNTED");

        return () => {
            console.log("ListComponent UN_MOUNTED");

        }
    }, [])

    return (
        <div>
            <ul>
                {todos.length > 0 &&
                    todos.map((item) => <li key={item.id}>{item.text}</li>)}
            </ul>
        </div>
    );
});

export default ListComponent;