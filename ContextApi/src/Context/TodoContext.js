import { createContext,useContext } from "react"


//
export const TodoContext = createContext({
  todos:[
    {
        id:1,
        todo:"Todo msg",
        complete:false
    }
  ],
 addTodo:(todo)=>{},
 updateTodo:(id,todo)=>{},
 deleteTodo:(id)=>{},
 toggleComplete:(id)=>{}

})

export const useTodo =()=>{
    return useContext(TodoContext);  //useCotext are return context 
}

//context provider 

export const TodoProvider= TodoContext.Provider


