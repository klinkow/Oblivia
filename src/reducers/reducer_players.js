import { UPDATE_NAME } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case UPDATE_NAME: {
    switch (action.currentPlayer) {
    case 1:
      return [action.payload]
    case 2:
      return [...state, action.payload]
    }
  }
  }
  return state
}
