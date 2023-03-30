import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "ProductList",
    description: "ProductList 1 description",
    completed: false,
  },
];

{/*el estado inicial tendrá como valor definido la constante initialState*/}
{/*----------explicar reducers y addTask----------
addTask:
-eL ACTION ES BASICAMENTE UN OBJETO QUE TIENE UN NOMBRE QUE ES: Task/AddTask.
-Y luego este action tiene un payload: El payload es el parametro que le pasamos a la función AddTask ("...task y el id").
-state.push(action.payload): Añadimos un objeto al arreglo action.payload (task y su id)*/}

{/*deleteTask:
-const taskFound = state.find(task=> task.id === action.payload): Por c/tarea recorrida, si el id de la tarea es === a los datos del action.payload(objeto)...
-Si el taskFound, es encontrado, eliminaremos la tarea.
-state.splice(state.indexOf(taskFound),1): Splice tiene 2 parametros, el indice de la tarea y la cantidad de elementos que quiero seleccionar (1)*/}

{/*
editTask:
-En el action.payload (objeto) estará definifo el id,title,description
-const foundTask = state.find (task => task.id === id): Tarea encontrada, buscaremos en el estado, si el id de la tarea es igual al id de la tarea que está dentro del payload
-Si se encuentra foundTask o si se cumple, reemplazaremos en el payload, el title y la description.
*/
}
export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    editTask: (state, action) => {
      const {id,title,description} = action.payload
      
      const foundTask = state.find (task => task.id === id)
      if(foundTask){
        foundTask.title = title
        foundTask.description = description
      }
    },
    
    deleteTask: (state,action)=>{
      const taskFound = state.find(task=> task.id === action.payload)
      if(taskFound){
        state.splice(state.indexOf(taskFound),1)
      }
    }
  },
});
{/*----------explicar----------*/}
export const {addTask,deleteTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;
