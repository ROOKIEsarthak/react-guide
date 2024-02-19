import {createSlice , nanoid} from '@reduxjs/toolkit'

// nanoid function is used to generate unique id's only and nothing else 


const initialState = { // ---> initial state can be anything i.e an array , object .

    todos: [{ id : 1 , text : "Hello World !!!" }]
}

/*

Slice can be inferred as a bigger version of a reducer which give multitple options/functionalities including reducer .

A reducer in redux is nothing but a functionality here.
In redux a reducer can be taken as a pure function ,
which is responsible for handling state transitions within you application.
Reducers take a state and an action as an input and then 
calculate and return new state on the basis of the action given .

*/

// const hello = ()=>{
//     console.log("say hello");
// }

export const todoSlice = createSlice({
    name:'todo', // ---> name of the slice
    initialState, // ---> every slice has an initial state which 
                  //shows the default state value

    reducers: { // reducers contain (properties/actions) and functions
        
        
        /* 
        
        ---> addTodo is a property : hello is a function which can be written as ' ()=>{} '
        
        ----> this function will always have access to 2 options which are (state , action )
        
        ---> state will give access to all the values in the current initial/defualt state here .
        eg whether it has one todo app or multiple todos or zero todos etc .

        ---> action parameter represents the type of action which was performed .
        eg {
            type: 'ADD_TODO',
            payload: {
                id: 1,
                text: 'Buy groceries',
                completed: false
            }
            }
        the type property here defines the type of action being performed and 
        the payload holds the data if present with whatever the action was performed .

        */
        addTodo: (state,action)=>{
            const todo = {
                 id : nanoid() , // id should be unique
                 text : action.payload, // payload is an object
            }
            state.todos.push(todo)
        
        },

        
        removeTodo: ()=>{},
    }
})