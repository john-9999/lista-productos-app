import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
{
  /*browserRouter: es el enrutador. Routes: son las rutas que crearemos para cada componente. Route: Es para ponerle nombre a la ruta de cada componente*/
}

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
      <BrowserRouter>
        <Routes>
          
          <Route path="/create-task" element={<TaskForm></TaskForm>} />
          <Route path="/" element={<TaskList></TaskList>} />
          <Route path="/edit-task/:id" element={<TaskForm></TaskForm>}></Route>
          
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
