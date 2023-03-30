import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
{
  /*UseSelector es para traer las tareas desde el estado*/
}
{
  /*hook para cambiar de pogina con react-router-dom. useParams: Si el params o parametro existe es porque estoy editando la tarea*/
}
{
  /*Formulario que nos permitirá listar las tareas que querramos escribir*/
}

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);

  {
    /*Guardamos las tareas que añadimos en el estado con el nombre y su valor*/
  }
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  {
    /*Al guardar o hacer submit mostraremos las tareas añadidas*/
  }
  {
    /*----------explicar----------*/
  }
  {
    /*-eL ACTION ES BASICAMENTE UN OBJETO QUE TIENE UN NOMBRE QUE ES: Task/AddTask
-Y luego este action tiene un payload: El payload es el parametro que le pasamos a la función AddTask ("...task y el id")*/
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if(params.id){
      dispatch(editTask(task))
    } else{

      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      )
    }
    {
      /*Una vez se liste la tarea, se redigirá a la siguiente ruta para que se muestren (al TaskList)*/
    }
    navigate("/");
  }

  useEffect(() => {
    if(params.id){
      setTask(tasks.find((task)=> task.id === params.id))
    }
  }, [params.id, tasks]);

  {
    /*Este UseEffect es para editar la tarea
-Si hay parametros de id (o sea si hay tareas enrutadas con id)
-Establecer lo que has encontrado en esa tarea con setTask
-tasks.find: buscar en tasks, (task)=> va a buscar en task, task.id === params.id si el id de la tarea coincide con el parametro clickeado
*/
  }
  

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-sm font-bold mb-2">Title:</label>
      <input
        maxlength="100"
        minlength="7"
        required
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />

      <label htmlFor="description" className="block text-sm font-bold mb-2">Description:</label>
      <textarea
        required
        name="description"
        type="text"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>

      <button className="bg-indigo-600 px-2 py-1 rounded-md">Save</button>
    </form>
  );
}

export default TaskForm;
