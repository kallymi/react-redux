const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (id, description) => ({
  type: ADD_TASK,
  payload: { id, description, isDone: false },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { tasks: [...state.tasks, action.payload] };
    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
    default:
      return state;
  }
};

export default tasksReducer;
