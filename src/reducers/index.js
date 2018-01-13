import { combineReducers } from 'redux';
import UpdateGameStateReducer from './reducer_update_game_state';
import QuestionsReducer from './reducer_questions';
import AnswersReducer from './reducer_answers';
import PlayersReducer from './reducer_players';

const rootReducer = combineReducers({
  players: PlayersReducer,
  question: QuestionsReducer,
  answers: AnswersReducer,
  gameState: UpdateGameStateReducer
});

export default rootReducer;
