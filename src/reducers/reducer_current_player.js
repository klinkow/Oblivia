import { UPDATE_CURRENT_PLAYER } from '../actions/index';

export default function(state = 1, action) {
  switch(action.type) {
  case UPDATE_CURRENT_PLAYER:
    switch(state) {
    case 1:
      return 2
    case 2:
      return 1
    }
  }
  return state
}
