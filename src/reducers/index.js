import { combineReducers } from 'redux';
import UpdateGameStateReducer from './reducer_update_game_state';
import QuestionsReducer from './reducer_questions';
import AnswersReducer from './reducer_answers';
import CorrectAnswersReducer from './reducer_correct_answers';
import PlayersReducer from './reducer_players';
import CurrentPlayerReducer from './reducer_current_player';
import Player1ScoreReducer from './reducer_player1_score';
import Player2ScoreReducer from './reducer_player2_score';
import CurrentWinnerReducer from './reducer_current_winner'

const rootReducer = combineReducers({
  players: PlayersReducer,
  question: QuestionsReducer,
  answers: AnswersReducer,
  correctAnswer: CorrectAnswersReducer,
  gameState: UpdateGameStateReducer,
  currentPlayer: CurrentPlayerReducer,
  currentWinner: CurrentWinnerReducer,
  player1Score: Player1ScoreReducer,
  player2Score: Player2ScoreReducer
});

export default rootReducer;
