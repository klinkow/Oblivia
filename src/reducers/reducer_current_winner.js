import { UPDATE_CURRENT_WINNER } from '../actions/index'

export default function(state = 'tie game', action) {
  switch (action.type) {
  case UPDATE_CURRENT_WINNER:
    return action.payload
  default:
    return state
  }
}
