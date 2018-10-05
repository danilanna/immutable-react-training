import { TODOS } from './vanillaTypes';

export const toggleComplete = (itemId) => {
  return {
    type: TODOS.TOGGLE_COMPLETE,
    itemId
  }
}

export const changeFilter = (filter) => {
  return {
    type: TODOS.CHANGE_FILTER,
    filter
  }
}

export const editItem = (itemId) => {
  return {
    type: TODOS.EDIT_ITEM,
    itemId
  }
}

export const doneEditing = (itemId, newText) => {
  return {
    type: TODOS.DONE_EDITING,
    itemId,
    newText
  }
}

export const cancelEditing = (itemId) => {
  return {
    type: TODOS.CANCEL_EDITING,
    itemId
  }
}

export const clearCompleted = () => {
  return {
    type: TODOS.CLEAR_COMPLETED,
  }
}

export const deleteItem = (itemId) => {
  return {
    type: TODOS.DELETE_ITEM,
    itemId
  }
}

export const addItem = (text) => {
  return {
    type: TODOS.ADD_ITEM,
    text
  }
}
