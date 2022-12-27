import React,{useState} from 'react';

import AddTaskForm from './components/taskForm'
import UpsdateTaskForm from './components/updateForm'
import ToDo from './components/toDo'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {
//task (todo list) State

const [toDo,setToDo] = useState([])
// temp state
const [newTask,setNewTask] = useState('')
const [updateData, setUpdateData] = useState('');
//add task
const addTask=()=>{
if(newTask){
  let num = toDo.length+1;
  let newentry = {id:num, title:newTask, status:false}
  setToDo([...toDo,newentry])
  setNewTask('');
}
}
//delete task
const deleteTask = (id)=>{
let newTask = toDo.filter(task => task.id !== id)
setToDo(newTask)
}
//mark task as done or completed 
const markDone = (id)=>{
  console.log("qjhd");
let newTask = toDo.map(task =>{
  if(task.id === id){
    return({...task, status: !task.status})
  }
  return task;
})
setToDo(newTask);
}
//to cancel update
const cancelUpdate = ()=>{
setUpdateData('')
}
//cahnge tasks for update
const changeTask = (e)=>{
let newentry = {
  id:updateData.id,
  title:e.target.value,
  status:updateData.status ? true : false
}
setUpdateData(newentry)
}
//update task
const updateTask = ()=>{
  let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
  let updatedObj =[...filterRecords,updateData]
  setToDo(updatedObj)
  setUpdateData('')
}

  return (
    <div className="container App">

      <br/><br/>
      <h2>To Do List App</h2>
      <br/><br/>
{/*update Task*/}
{updateData && updateData ? (

<UpsdateTaskForm
updateData={updateData}
changeTask={changeTask}
updateTask={updateTask}
cancelUpdate={cancelUpdate}
/>

):(
<AddTaskForm
newTask = {newTask}
setNewTask ={setNewTask}
addTask  = {addTask}
/>
)}



{/*Display todos*/}


{toDo && toDo.length ? '' : 'No Tasks Are Added'}

<ToDo
toDo={toDo}
markDone={markDone}
setUpdateData={setUpdateData}
deleteTask={deleteTask}
/>
     
    </div>
  );
}

export default App;
