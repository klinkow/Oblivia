export default function(state = 1, action) {
  switch(action.type) {
  case 'UPDATE_GAME_STATE':
    return action.gameState
  }
  return state
}
