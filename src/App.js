import React,{useState} from 'react';

import AddTaskForm from './components/taskForm'
import UpsdateTaskForm from './components/updateForm'
import ToDo from './components/toDo'

import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen , faTrashCan
} from '@fortawesome/free-solid-svg-icons'
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

<>
<div className='row'>
  <div className='col'>

  <input
  value={updateData && updateData.title}
  onChange={(e)=>changeTask(e)}
  className='form-control form-control-1g '></input>

    <div className='col-auto'>

<button className='btn btn-lg btn-success mr-20'
onClick={updateTask}
>Update</button>
<button className='btn btn-lg btn-warning mr-20'
onClick={cancelUpdate}
>Cancel</button>
    </div>

  </div>
</div>
<br></br>
</>
):(
  <>
{/*add task*/}

      <div className='row'>
        <div className='col'>
          <input
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
          className='form-control form-control-1g '></input>
        </div>
        <div className='col-auto'>
          <button
          onClick={addTask}
          className='btn btn-lg btn-success mr-20'>Add Task</button>
        </div>
      </div>
      <br></br>
      </>
)}



{/*Display todos*/}


{toDo && toDo.length ? '' : 'No Tasks Are Added'}

{toDo && toDo
.sort((a,b)=> a.id > b.id ? 1 : -1)
.map(
  (task,index)=>{
    return(
      <React.Fragment key={task.id}>
        <div className='col taskBg'>


          <div className={task.status ? 'done' : ''}> 
      <span className='taskNumber'>{index + 1}</span>
      <span className='taskText'>{task.title}</span>
      </div>
      
      <div className='iocnWrap '>

     
        <span title='Completed/NotCompleted'
        onClick={()=>markDone(task.id)}>
        <FontAwesomeIcon icon={faCircleCheck} />
        </span>

        {task.status ? null :(
        
        <span title='Edit' 
        onClick={()=> setUpdateData({
          id:task.id,
          title:task.title,
          status:task.status ? true : false
        }) }
        >
        <FontAwesomeIcon icon={faPen} />
        </span>
        )}


        <span title='Delete' 
        onClick={()=>deleteTask(task.id)}>
        <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>

      </div>
        </React.Fragment>
    )
  }
)}
     
    </div>
  );
}

export default App;
