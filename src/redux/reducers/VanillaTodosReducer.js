import { TODOS } from '../actions/vanillaTypes';

const INITIAL_STATE = {
  todos: [
    { id: 1, text: 'React', status: 'active', editing: false },
    { id: 2, text: 'Redux', status: 'active', editing: false },
    { id: 3, text: 'Vanilla', status: 'active', editing: false },
  ],
  actives: 3,
  filter: 'all'
};

const findItemIndex = (state, itemId) => {
  return state.todos.findIndex((item) => item.id === itemId);
}

const getItem = (state, itemIndex) => {
  return state.todos.find((item, idx) => idx === itemIndex);
}

const updateTodos = (state, itemIndex, newItem) => {
  const newTodos = [...state.todos];
  newTodos[itemIndex] =  newItem;
  const newState = { ...state, todos: newTodos };
  return newState;
}

const toggleComplete = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = getItem(state, itemIndex);
  const isActive = updatedItem.status === 'active';
  const newStatus = isActive ? 'completed' : 'active';
  const newItem = { ...updatedItem, status: newStatus };
  const actives = state.actives;
  const newState = { ...state, actives: isActive ? actives -1 : actives +1}
  return updateTodos(newState, itemIndex, newItem);
}

const changeFilter = (state, filter) => {
  state.filter = filter;
  return state;
}

const editItem = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = getItem(state, itemIndex);
  const newItem = { ...updatedItem, editing: true }
  return updateTodos(state, itemIndex, newItem);
}

const cancelEditing = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = getItem(state, itemIndex);
  const newItem = { ...updatedItem, editing: false }
  return updateTodos(state, itemIndex, newItem);
}

const doneEditing = (state, itemId, newText) => {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = getItem(state, itemIndex);
  const newItem = { ...updatedItem, editing: false, text: newText };
  return updateTodos(state, itemIndex, newItem);
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

  state.actives++;
  state.todos.push(newItem);
  
  return state;
}

const deleteItem = (state, itemId) => {

  const itemIndex = findItemIndex(state, itemId);
  const deletedItem = getItem(state, itemIndex);

  const newTodos = [...state.todos];
  newTodos.splice(itemIndex, 1);

  if (deletedItem.status !== 'completed') {
    return {...state, todos: newTodos, actives: state.actives -1};
  }

  return {...state, todos: newTodos};

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS.TOGGLE_COMPLETE:
      return toggleComplete(state, action.itemId);
    case TODOS.CHANGE_FILTER:
      return changeFilter(state, action.filter);
    case TODOS.EDIT_ITEM:
      return editItem(state, action.itemId);
    case TODOS.CANCEL_EDITING:
      return cancelEditing(state, action.itemId);
    case TODOS.DONE_EDITING:
      return doneEditing(state, action.itemId, action.newText);
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
