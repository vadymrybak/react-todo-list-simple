import React, { useEffect } from "react";
import { When } from "../Data";

interface IListControlComponentProps {
    when: When;
    handleToDoDelete: (when: When) => void;
    handleInputChange: (when: When, value: string) => void;
    handleToDoAdd: (when: When) => void;
}

const ListControlComponent = React.memo((props: IListControlComponentProps) => {
    console.log("ListControlComponent RENDER", props.when);

    useEffect(() => {
        console.log("ListControlComponent MOUNTED");

        return () => {
            console.log("ListControlComponent UN_MOUNTED");

        }
    }, [])

    return (
        <>
            <button onClick={() => props.handleToDoDelete(props.when)}>Удалить</button>
            <input title={props.when} onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.handleInputChange(props.when, e.target.value)} />
            <button onClick={() => props.handleToDoAdd(props.when)}>Добавить</button>
        </>
    )
});

export default ListControlComponent;