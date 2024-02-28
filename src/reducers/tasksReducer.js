// src/reducers/tasksReducer.js
const initialState = {
    tasks: [
      { id: 1, description: 'Tâche 1', isDone: false },
      { id: 2, description: 'Tâche 2', isDone: true },
      // ... autres tâches
    ],
    filter: 'all',
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  