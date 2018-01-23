import { UPDATE_GAME_STATE } from '../actions/index'

export default function(state = 1, action) {
  switch(action.type) {
  case UPDATE_GAME_STATE:
    return (state + 1)
  }
  return state
}
