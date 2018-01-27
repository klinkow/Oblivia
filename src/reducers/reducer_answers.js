import { UPDATE_ANSWERS } from '../actions/index';


export default function(state = null, action) {
  switch(action.type) {
  case UPDATE_ANSWERS:
    switch(action.gameState) {
    case 4:
      return [
        "1Hilary Clinton",
        "1Mike Pence",
        "1Rob Haywood",
        "1Donald Trump"
      ]
    case 5:
      return [
        "2Hilary Clinton",
        "2Mike Pence",
        "2Rob Haywood",
        "2Donald Trump"
      ]
    case 6:
      return [
        "3Hilary Clinton",
        "3Mike Pence",
        "3Rob Haywood",
        "3Donald Trump"
      ]
    case 7:
      return [
        "4Hilary Clinton",
        "4Mike Pence",
        "4Rob Haywood",
        "4Donald Trump"
      ]
    case 8:
      return [
        "5Hilary Clinton",
        "5Mike Pence",
        "5Rob Haywood",
        "5Donald Trump"
      ]
    case 9:
      return [
        "6Hilary Clinton",
        "6Mike Pence",
        "6Rob Haywood",
        "6Donald Trump"
      ]
    case 10:
      return [
        "7Hilary Clinton",
        "7Mike Pence",
        "7Rob Haywood",
        "7Donald Trump"
      ]
    case 11:
      return [
        "8Hilary Clinton",
        "8Mike Pence",
        "8Rob Haywood",
        "8Donald Trump"
      ]
    }
  }
  return state
}
