import { combineReducers } from 'redux';
import CurrentQuestionReducer from './reducer_current_question';
import QuestionsReducer from './reducer_questions';
import PlayersReducer from './reducer_players';

const rootReducer = combineReducers({
  players: PlayersReducer,
  questions: QuestionsReducer,
  currentQuestion: CurrentQuestionReducer
});

export default rootReducer;
