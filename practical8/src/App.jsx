import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (taskText) => {
    if (taskText.trim() === '') return;
    
    if (editingTask !== null) {
      // Edit existing task
      const updatedTasks = tasks.map(task => 
        task.id === editingTask.id ? { ...task, text: taskText } : task
      );
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    if (editingTask && editingTask.id === taskId) {
      setEditingTask(null);
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center">Task Manager</h2>
            </div>
            <div className="card-body">
              <AddTask 
                addTask={addTask} 
                editingTask={editingTask}
              />
              <TaskList 
                tasks={tasks} 
                deleteTask={deleteTask} 
                toggleComplete={toggleComplete}
                startEditing={startEditing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;