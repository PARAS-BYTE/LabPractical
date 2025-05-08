import React, { useState, useEffect } from 'react';

function AddTask({ addTask, editingTask }) {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
    } else {
      setTaskText('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
}

export default AddTask;