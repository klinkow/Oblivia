


export function selectChoice(choice, gameState) {
  return function(dispatch) {
    var newGameState = (gameState + 1);





    // var player1score;
    // var player2score;
    // var choice;

    // if (choice === ) {
    //   if (player === 1) {
    //
    //   } else {
    //
    //   }
    // }

    // console.log(createStoreWithMiddleware);

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
