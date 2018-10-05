import { Map, fromJS } from 'immutable';
import { TODOS } from '../actions/immutableTypes';

const INITIAL_STATE = fromJS({
    todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    actives: 3,
    filter: 'all'
});

const findItemIndex = (state, itemId) => {
  return state.get('todos').findIndex((item) => item.get('id') === itemId);
}

const getItem = (state, itemIndex) => {
  return state.get('todos').get(itemIndex)
}

const updateTodos = (state, itemIndex, updatedItem) => {
  return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

const toggleComplete = (state, itemId) => {
  const itemIndex =  findItemIndex(state, itemId);
  const item = getItem(state, itemIndex);
  
  const isActive = item.get('status') === 'active';
  const newState = state.update('actives', actives => isActive ? actives -1 : actives +1);
  const updatedItem = item.set('status', isActive ? 'completed' : 'active');
  
  return updateTodos(newState, itemIndex, updatedItem);
}

const changeFilter = (state, filter) => {
  return state.set('filter', filter);
}

const editItem = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = getItem(state, itemIndex).set('editing', true);

  return updateTodos(state, itemIndex, updatedItem);
}

const cancelEditing = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = getItem(state, itemIndex).set('editing', false);

  return updateTodos(state, itemIndex, updatedItem);
}

const doneEditing = (state, itemId, newText) => {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = 
    getItem(state, itemIndex)
      .set('editing', false)
      .set('text', newText);

  return updateTodos(state, itemIndex, updatedItem);
}

const clearCompleted = (state) => {
  return state.update('todos',(todos) => 
      todos.filterNot((item) => 
        item.get('status') === 'completed'
      )
    );
}

const addItem = (state, text) => {
  const itemId = Math.floor((1 + Math.random()) * 0x10000);
  const newItem = Map({id: itemId, text: text, status: 'active'});
  return state.update('todos', todos => todos.push(newItem))
    .update('actives', actives => actives +1);
}

const deleteItem = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);
  const deletedItem = getItem(state, itemIndex);

  const newState = state.update('todos', todos => todos.remove(itemIndex));

  if (deletedItem.get('status') !== 'completed') {
    return newState.update('actives', actives => actives -1);
  }

  return newState;

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS.IMMUTABLE_TOGGLE_COMPLETE:
      return toggleComplete(state, action.itemId);
    case TODOS.IMMUTABLE_CHANGE_FILTER:
      return changeFilter(state, action.filter);
    case TODOS.IMMUTABLE_EDIT_ITEM:
      return editItem(state, action.itemId);
    case TODOS.IMMUTABLE_CANCEL_EDITING:
      return cancelEditing(state, action.itemId);
    case TODOS.IMMUTABLE_DONE_EDITING:
      return doneEditing(state, action.itemId, action.newText);
    case TODOS.IMMUTABLE_CLEAR_COMPLETED:
      return clearCompleted(state);
    case TODOS.IMMUTABLE_ADD_ITEM:
      return addItem(state, action.text);
    case TODOS.IMMUTABLE_DELETE_ITEM:
      return deleteItem(state, action.itemId);
    default:
      return state;
  }
}
