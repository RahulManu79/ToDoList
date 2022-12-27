const UpdateForm = ({ updateData,changeTask,updateTask,cancelUpdate})=>{

    return(
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
    )
} 

export default UpdateForm