import {createContext , useContext} from 'react';

export const TodoContext = createContext({

    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},            
    deleteTodo: (id)=>{},
    updateTodo: (id,todo)=>{},
    toggleComplete: (id)=>{}

    // here weve only talked about the methods and the values present in this context

})

export const UseTodo =()=>{
    return(
        useContext(TodoContext)
    )
}

export const TodoProvider = TodoContext.Provider