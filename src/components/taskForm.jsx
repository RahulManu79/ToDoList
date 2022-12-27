const AddTaskForm = ({newTask, setNewTask , addTask })=>{

    return(
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
    )
} 

export default AddTaskForm