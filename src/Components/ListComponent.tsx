import { ITodo } from "../Data";

const ListComponent = ({ todos }: { todos: ITodo[] }) => {
    return (
        <div>
            <ul>
                {todos.length > 0 &&
                    todos.map((item) => <li key={item.id}>{item.text}</li>)}
            </ul>
        </div>
    );
};
``
export default ListComponent;