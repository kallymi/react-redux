import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = ({ filter }) => {
  const tasks = useSelector((state) => {
    if (filter === 'all') {
      return state.tasks;
    } else {
      return state.tasks.filter((task) =>
        filter === 'done' ? task.isDone : !task.isDone
      );
    }
  });

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;