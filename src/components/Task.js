// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../redux/tasks';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => dispatch(toggleTask(id))}
      />
      <span>{description}</span>
    </div>
  );
};

export default Task;
