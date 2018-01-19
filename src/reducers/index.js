import { combineReducers } from 'redux';
import UpdateGameStateReducer from './reducer_update_game_state';
import QuestionsReducer from './reducer_questions';
import AnswersReducer from './reducer_answers';
import CorrectAnswersReducer from './reducer_correct_answers';
import PlayersReducer from './reducer_players';
import CurrentPlayerReducer from './reducer_current_player';
import ScoresReducer from './reducer_scores'

const rootReducer = combineReducers({
  players: PlayersReducer,
  question: QuestionsReducer,
  answers: AnswersReducer,
  correctAnswer: CorrectAnswersReducer,
  gameState: UpdateGameStateReducer,
  currentPlayer: CurrentPlayerReducer,
  scores: ScoresReducer
});

export default rootReducer;
