import { TODOS } from '../actions/vanillaTypes';

const INITIAL_STATE = {
  todos: [
    { id: 1, text: 'React', status: 'active', editing: false },
    { id: 2, text: 'Redux', status: 'active', editing: false },
    { id: 3, text: 'Vanilla', status: 'active', editing: false },
  ],
  filter: 'all'
};

const findItemIndex = (state, itemId) => {
  return state.todos.findIndex((item) => item.id === itemId);
}

const getItem = (state, itemIndex) => {
  return state.todos.find((item, idx) => idx === itemIndex);
}

const toggleComplete = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = getItem(state, itemIndex);
  const newItem = { ...updatedItem, status: updatedItem.status === 'active' ? 'completed' : 'active' };
  const newTodos = [...state.todos];
  newTodos[itemIndex] =  newItem;
  const newState = { ...state, todos: newTodos };
  return newState;
}

const changeFilter = (state, filter) => {
  return { ...state, filter }
}

const clearCompleted = (state) => {
  const newTodos = [...state.todos.filter(
    (item) => item.status !== 'completed'
  )];
  return {...state, todos: newTodos};
}

const addItem = (state, text) => {
  const itemId = Math.floor((1 + Math.random()) * 0x10000);
  const newItem = { id: itemId, text: text, status: 'active' };
  const newState = { ...state, todos: [...state.todos] };
  newState.todos.push(newItem);
  return newState;
}

const deleteItem = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);

  const newTodos = [...state.todos];
  newTodos.splice(itemIndex, 1);

  return {...state, todos: newTodos};
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS.TOGGLE_COMPLETE:
      return toggleComplete(state, action.itemId);
    case TODOS.CHANGE_FILTER:
      return changeFilter(state, action.filter);
    case TODOS.CLEAR_COMPLETED:
      return clearCompleted(state);
    case TODOS.ADD_ITEM:
      return addItem(state, action.text);
    case TODOS.DELETE_ITEM:
      return deleteItem(state, action.itemId);
    default:
      return state;
  }
}
