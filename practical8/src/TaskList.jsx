import React from 'react';

function TaskList({ tasks, deleteTask, toggleComplete, startEditing }) {
  return (
    <ul className="list-group">
      {tasks.length === 0 ? (
        <li className="list-group-item text-muted">No tasks yet. Add one above!</li>
      ) : (
        tasks.map(task => (
          <li 
            key={task.id} 
            className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="me-2"
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </div>
            <div>
              <button 
                onClick={() => startEditing(task)}
                className="btn btn-sm btn-outline-secondary me-2"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteTask(task.id)}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;