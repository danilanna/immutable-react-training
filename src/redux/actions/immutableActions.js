import { TODOS } from './immutableTypes';

export const toggleComplete = (itemId) => {
  return {
    type: TODOS.IMMUTABLE_TOGGLE_COMPLETE,
    itemId
  }
}

export const changeFilter = (filter) => {
  return {
    type: TODOS.IMMUTABLE_CHANGE_FILTER,
    filter
  }
}

export const clearCompleted = () => {
  return {
    type: TODOS.IMMUTABLE_CLEAR_COMPLETED,
  }
}

export const deleteItem = (itemId) => {
  return {
    type: TODOS.IMMUTABLE_DELETE_ITEM,
    itemId
  }
}

export const addItem = (text) => {
  return {
    type: TODOS.IMMUTABLE_ADD_ITEM,
    text
  }
}
