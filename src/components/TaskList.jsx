import { useSelector, useDispatch } from "react-redux";
import {deleteTask} from '../features/tasks/taskSlice'
import {Link} from 'react-router-dom'

{/*Componente que se encarga de mostrar las tareas*/}
function TaskList() {
  {/*Mostramos las tareas y las definimos en una const para acceder al estado de las tareas*/}
  const tasks = useSelector(state => state.tasks);
  console.log(tasks);
  const dispatch = useDispatch()

  const handleDelete = (id)=>{
    dispatch(deleteTask(id))
  }

  {/*
  Retorna: 
 -Por cada tarea que recorra, mostrarás las siguientes etiquetas HTML */}
  return (
    <div className="w-4/6">

     <header className="flex justify-between items-center py-4">
      <h1 className="text-sm font-bold text-white">Lists: {tasks.length}</h1>
      <Link className="text-zinc-900 bg-white px-2 py-1 rounded-md" onClick={()=>{
        alert("Lists submitted successfully")
      }}>Send</Link>
      <Link to={"/create-task"} className="bg-indigo-600 px-2 py-1 rounded-md">Create ProductList</Link>

     </header>

     <div className="grid grid-cols-2 gap-2">
     {tasks.map(task => (
        <div key={task.id} className="bg-neutral-800 p-4 rounded-md overflow-auto">
          <header className="flex justify-between">
          <h3>{task.title}</h3>
          <div className="grid grid-cols gap-2 p-0 m-0">
          <Link to={`/edit-task/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit</Link>
          <button onClick={()=>handleDelete(task.id)} className="bg-red-500 px-2 py-1 text-xs rounded-md self-center">Delete</button>
          </div>
          </header>
          <p>{task.description}</p>
        </div>
      ))}
     </div>
      
    </div>
  );
}

export default TaskList;
