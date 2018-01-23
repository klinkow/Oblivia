export default function(state = null, action) {
  switch(action.type) {
  case 'UPDATE_CORRECT_ANSWER':
    switch(action.gameState) {
    case 4:
      return (
        "Donald Trump"
      )
    case 5:
      return (
        "Donald Trump"
      )
    case 6:
      return (
        "Donald Trump"
      )
    case 7:
      return (
        "Donald Trump"
      )
    case 8:
      return (
        "Donald Trump"
      )
    case 9:
      return (
        "Donald Trump"
      )
    case 10:
      return (
        "Donald Trump"
      )
    case 11:
      return (
        "Donald Trump"
      )
    }
  }
  return (
    "Donald Trump"
  )
}
