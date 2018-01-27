import { fullGameState } from '../index'

export const UPDATE_CURRENT_PLAYER = 'UPDATE_CURRENT_PLAYER';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const UPDATE_PLAYER1_SCORE = 'UPDATE_PLAYER1_SCORE';
export const UPDATE_PLAYER2_SCORE = 'UPDATE_PLAYER2_SCORE';
export const UPDATE_CURRENT_WINNER = 'UPDATE_CURRENT_WINNER';
export const UPDATE_BANNER = 'UPDATE_BANNER';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';
export const UPDATE_CORRECT_ANSWER = 'UPDATE_CORRECT_ANSWER';

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
    var newGameState = fullGameState.gameState + 1;
    dispatch({
      type: UPDATE_NAME,
      currentPlayer: currentPlayer,
      payload: name
    })
    dispatch({
      type: UPDATE_CURRENT_PLAYER
    })
    dispatch({
      type: UPDATE_BANNER,
      gameState: newGameState
    })
    dispatch({
      type: UPDATE_ANSWERS,
      gameState: newGameState
    })
    dispatch({
      type: UPDATE_CORRECT_ANSWER,
      gameState: newGameState
    })
    advanceGameState(dispatch);
  }
}

export function selectChoice(choice) {
  var newGameState = fullGameState.gameState + 1;
  var correctAnswer = fullGameState.correctAnswer;
  var currentPlayer = fullGameState.currentPlayer;
  var player1Score = fullGameState.player1Score;
  var player2Score = fullGameState.player2Score;

  function updateCurrentWinner(dispatch) {
    if (player1Score > player2Score) {
      dispatch({
        type: UPDATE_CURRENT_WINNER,
        payload: fullGameState.players[0]
      })
    } else if (player1Score < player2Score) {
      dispatch({
        type: UPDATE_CURRENT_WINNER,
        payload: fullGameState.players[1]
      })
    } else {
      dispatch({
        type: UPDATE_CURRENT_WINNER,
        payload: 'tie game'
      })
    }
  }

  return function(dispatch) {
    dispatch({
      type: UPDATE_BANNER,
      gameState: newGameState
    })
    dispatch({
      type: UPDATE_ANSWERS,
      gameState: newGameState
    })
    dispatch({
      type: UPDATE_CORRECT_ANSWER,
      gameState: newGameState
    })
    if (choice === correctAnswer) {
      if (currentPlayer === 1) {
        dispatch({
          type: UPDATE_PLAYER1_SCORE
        })
        player1Score += 30;
        updateCurrentWinner(dispatch);
      } else {
        dispatch({
          type: UPDATE_PLAYER2_SCORE
        })
        player2Score += 30;
        updateCurrentWinner(dispatch);
      }
    }
    dispatch({
      type: UPDATE_CURRENT_PLAYER
    })
    advanceGameState(dispatch);
  }
}
