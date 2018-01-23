import { UPDATE_PLAYER1_SCORE } from '../actions/index';

export default function(state = 0, action) {
  switch(action.type) {
  case UPDATE_PLAYER1_SCORE:
    return (state + 30)
  default:
    return state
  }
}
