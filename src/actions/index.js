import { fullGameState } from '../index'


export function selectChoice(choice, gameState) {
  return function(dispatch) {
    var newGameState = (gameState + 1);

    // TODO: use fullGameState to write logic for choice selected and others
    // if (choice === ) {
    //   if (player === 1) {
    //
    //   } else {
    //
    //   }
    // }


    dispatch({
      type: 'CHOICE_SELECTED',
      choice: choice,
      gameState: newGameState
    })
    dispatch({
      type: 'UPDATE_ANSWERS',
      gameState: newGameState
    })
    dispatch({
      type: 'UPDATE_GAME_STATE',
      gameState: newGameState
    })
  }
}
