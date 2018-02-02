import { ROUND3 } from '../actions/triviadb';

export default function(state = null, action) {
  switch(action.type) {
  case ROUND3:
    switch(action.gameState) {
      case 1:
        return action.payload;
      case 8:
        var newState = state;
        newState.splice(2, 1, action.gameState);
        return newState
      case 9:
        var newState = state;
        newState.splice(2, 1, action.gameState);
        return newState
    }
  }
  return state
}
