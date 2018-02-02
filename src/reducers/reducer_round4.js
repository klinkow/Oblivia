import { ROUND4 } from '../actions/triviadb';

export default function(state = null, action) {
  switch(action.type) {
  case ROUND4:
    switch(action.gameState) {
      case 1:
        return action.payload;
      case 10:
        var newState = state;
        newState.splice(2, 1, action.gameState);
        return newState
      case 11:
        var newState = state;
        newState.splice(2, 1, action.gameState);
        return newState
    }
  }
  return state
}
