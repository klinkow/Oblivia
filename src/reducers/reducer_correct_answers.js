import { UPDATE_CORRECT_ANSWER } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
  case UPDATE_CORRECT_ANSWER:
    switch(action.gameState) {
    case 4:
      return (
        "1Donald Trump"
      )
    case 5:
      return (
        "2Donald Trump"
      )
    case 6:
      return (
        "3Donald Trump"
      )
    case 7:
      return (
        "4Donald Trump"
      )
    case 8:
      return (
        "5Donald Trump"
      )
    case 9:
      return (
        "6Donald Trump"
      )
    case 10:
      return (
        "7Donald Trump"
      )
    case 11:
      return (
        "8Donald Trump"
      )
    }
  }
  return state;
}
