import { combineReducers } from 'redux';
import UpdateGameStateReducer from './reducer_update_game_state';
import PlayersReducer from './reducer_players';
import CurrentPlayerReducer from './reducer_current_player';
import Player1ScoreReducer from './reducer_player1_score';
import Player2ScoreReducer from './reducer_player2_score';
import CurrentWinnerReducer from './reducer_current_winner';
import Round1Reducer from './reducer_round1';

const rootReducer = combineReducers({
  players: PlayersReducer,
  answers: AnswersReducer,
  gameState: UpdateGameStateReducer,
  currentPlayer: CurrentPlayerReducer,
  currentWinner: CurrentWinnerReducer,
  player1Score: Player1ScoreReducer,
  player2Score: Player2ScoreReducer,
  round1: Round1Reducer,
  round2: Round2Reducer,
  round3: Round3Reducer
});

export default rootReducer;
