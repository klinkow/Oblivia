import { fullGameState } from '../index'

export const UPDATE_CURRENT_PLAYER = 'UPDATE_CURRENT_PLAYER';
export const UPDATE_NAME = 'UPDATE_NAME';

// TODO: change update game state reducer to include logic to add + 1, then refactor the three instances below
export function startGame() {
  return function(dispatch) {
    var newGameState = fullGameState.gameState + 1;
    dispatch({
      type: 'UPDATE_GAME_STATE',
      gameState: newGameState
    })
  }
}

export function submitName(name, currentPlayer) {
  return function(dispatch) {
    dispatch({
      type: UPDATE_NAME,
      currentPlayer: currentPlayer,
      payload: name
    })
    dispatch({
      type: UPDATE_CURRENT_PLAYER
    })
    var newGameState = fullGameState.gameState + 1;
    dispatch({
      type: 'UPDATE_GAME_STATE',
      gameState: newGameState
    })
  }
}

export function selectChoice(choice) {
  return function(dispatch) {
    var newGameState = fullGameState.gameState + 1;
    var correctAnswer = fullGameState.correctAnswer;
    var playerScores = fullGameState.scores;
    var currentPlayer = fullGameState.currentPlayer;

    dispatch({
      type: 'UPDATE_BANNER',
      gameState: newGameState
    })
    dispatch({
      type: 'UPDATE_ANSWERS',
      gameState: newGameState
    })
    dispatch({
      type: 'UPDATE_CORRECT_ANSWER',
      gameState: newGameState
    })
    if (choice === correctAnswer) {
      if (currentPlayer === 1) {
        playerScores[0] += 30;
        dispatch({
          type: 'UPDATE_SCORE',
          payload: playerScores
        })
      } else {
        playerScores[1] += 30;
        dispatch({
          type: 'UPDATE_SCORE',
          payload: playerScores
        })
      }
    }
    dispatch({
      type: UPDATE_CURRENT_PLAYER
    })
    dispatch({
      type: 'UPDATE_GAME_STATE',
      gameState: newGameState
    })
  }
}
