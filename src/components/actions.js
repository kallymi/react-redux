
export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task,
    };
};

export const toggleTask = (taskId) => {
    return {
        type: 'TOGGLE_TASK',
        payload: taskId,
    };
};
  
export const filterTasks = (isDone) => {
    return {
        type: 'FILTER_TASKS',
        payload: isDone,
    };
};
  
export const editTask = (taskId, editedDescription) => {
    return {
        type: 'EDIT_TASK',
        payload: { taskId, editedDescription },
    };
};
  