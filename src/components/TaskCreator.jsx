import React, { useState, Fragment } from 'react'

export const TaskCreator = (props) => {
    
    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createNewTask(newTaskName);
        //localStorage.setItem('tasks', newTaskName);
        setNewTaskName('');
    };

  return (
    <Fragment>
        <form onSubmit={handleSubmit} className="my-2 row">
            <div className="col-md-9">
              <input 
                type="text" 
                placeholder="Enter a new task"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                className="form-control" 
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary btn-sm">Save Task</button>
            </div>  
        </form>
    </Fragment>
  )
}
