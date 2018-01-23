import { fullGameState } from '../index'

export const UPDATE_CURRENT_PLAYER = 'UPDATE_CURRENT_PLAYER';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const UPDATE_PLAYER1_SCORE = 'UPDATE_PLAYER1_SCORE';
export const UPDATE_PLAYER2_SCORE = 'UPDATE_PLAYER2_SCORE';

function advanceGameState(dispatch) {
  dispatch({
    type: UPDATE_GAME_STATE
  })
}

export function startGame() {
  return function(dispatch) {
    advanceGameState(dispatch);
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
    advanceGameState(dispatch);
  }
}

export function selectChoice(choice) {
  return function(dispatch) {
    var newGameState = fullGameState.gameState + 1;
    var correctAnswer = fullGameState.correctAnswer;
    var currentPlayer = fullGameState.currentPlayer;
    console.log(fullGameState);
    console.log('Choice: ', choice);

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
      console.log('choice === correctAnswer')
      if (currentPlayer === 1) {
        console.log('player = 1')
        dispatch({
          type: UPDATE_PLAYER1_SCORE
        })
      } else {
        console.log('player = 2')
        dispatch({
          type: UPDATE_PLAYER2_SCORE
        })
      }
    }
    dispatch({
      type: UPDATE_CURRENT_PLAYER
    })
    advanceGameState(dispatch);
  }
}
