import { UPDATE_PLAYER2_SCORE } from '../actions/index';

export default function(state = 0, action) {
  switch(action.type) {
  case UPDATE_PLAYER2_SCORE:
    return (state + 30)
  default:
    return state
  }
}
