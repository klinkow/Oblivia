import { ROUND2 } from '../actions/triviadb';

export default function(state = null, action) {
  switch(action.type) {
  case ROUND2:
    switch(action.gameState) {
      case 1:
        return action.payload;
      case 6:
        var newState = state;
        newState.splice(2, 1, action.gameState);
        return newState
      case 7:
        var newState = state;
        newState.splice(2, 1, action.gameState);
        return newState
    }
  }
  return state
}
