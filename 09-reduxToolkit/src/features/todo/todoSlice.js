import {createSlice , nanoid} from '@reduxjs/toolkit';
// nanoid --> used to create unique id


/*

step1 -> create/define initialState 
step2 -> create slice


*/

const initialState = {
    todos:[{
        id:1 ,
        text: "Hello World !!"
    }]
}


// eg -->

    // function sayHello() {
    //     console.log("Say Hello World !!")
    // }

// in redux toolkit the function is not only declared but defined also 


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // addTodo: sayHello, -->  one way is to create a function and give its reference here like thsi
        
        
        /* 
            whenever we create an addTodo : we will always get access to 2 things -> (state , action), 
            its like syntax of redux toolkit .

            state -: gives the access to the all values present in the initial state
            
            action -: gives the values in order to do actions like remove , so in order to remove a todo
                    we need an (id) . The value of that id will be provided by action .
        */

        addTodo : (state , action)=>{

            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: (state , action)=>{

            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)

        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((todo)=>{
                if (todo.id === action.payload.id)
                {
                    return {
                        ...todo,
                        text:action.payload.text,
                    }
                }
                return todo;
            })

        }
    }
})




export const {addTodo , removeTodo , updateTodo} = todoSlice.actions
export default todoSlice.reducer