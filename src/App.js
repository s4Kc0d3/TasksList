//import { Paper, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/Container';



function App() {

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (!tasksItems.find(task => task.name === taskName)) {
      //alert(`Creating taskname: ${taskName}`);
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    } else {
      alert(`Taskname ${taskName} already exist.`);
    }
  };

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    );
  };


  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done));
    setShowCompleted(false);
  }


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {
          showCompleted && (
            <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
          )
        }   
      </Container>
    </main>
  );
}

export default App;
