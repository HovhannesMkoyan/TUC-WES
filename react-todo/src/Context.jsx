import { useState, createContext, useEffect, useMemo } from "react";

export const StateContext = createContext();

export default function Context(props) {
    const [state, setState] = useState({
        todos: [],
    });

    useEffect(() => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            setState({
                ...state,
                todos: JSON.parse(todos),
            });
        }
    }, [state])

    const providerValue = useMemo(
        () => ({ state, setState }),
        [state, setState]
    );

    return (
        <StateContext.Provider value={providerValue}>
            {props.children}
        </StateContext.Provider>
    );
}

