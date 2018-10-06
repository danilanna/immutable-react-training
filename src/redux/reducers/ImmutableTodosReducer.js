import { Map, fromJS } from 'immutable';
import { TODOS } from '../actions/immutableTypes';

const INITIAL_STATE = fromJS({
    todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
});

const findItemIndex = (state, itemId) => {
  return state.get('todos').findIndex((item) => item.get('id') === itemId);
}

const getItem = (state, itemIndex) => {
  return state.get('todos').get(itemIndex)
}

const toggleComplete = (state, itemId) => {
  const itemIndex =  findItemIndex(state, itemId);
  const item = getItem(state, itemIndex);

  const updatedItem = item.update('status', (status) => status === 'active' ? 'completed' : 'active');
  
  return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

const changeFilter = (state, filter) => {
  return state.set('filter', filter);
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
  return state.update('todos', todos => todos.push(newItem));
}

const deleteItem = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId);
  return state.update('todos', todos => todos.remove(itemIndex));
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS.IMMUTABLE_TOGGLE_COMPLETE:
      return toggleComplete(state, action.itemId);
    case TODOS.IMMUTABLE_CHANGE_FILTER:
      return changeFilter(state, action.filter);
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
