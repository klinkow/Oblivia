import { ROUND1 } from '../actions/nytimes';

export default function(state = null, action) {
  switch(action.type) {
  case ROUND1:
    switch(action.gameState) {
      case 1:
        return action.payload;
      case 4:
        var newState = state;
        newState.splice(2, 1, action.gameState);
        return newState
      case 5:
        var newState = state;
        newState.splice(2, 1, action.gameState);
        return newState
    }
  }
  return state
}
