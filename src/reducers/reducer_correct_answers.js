export default function(state = null, action) {
  switch(action.type) {
  case 'UPDATE_CORRECT_ANSWER':
    switch(action.gameState) {
    case 1:
      return (
        "Donald Trump"
      )
    case 2:
      return (
        "Donald Trump"
      )
    case 3:
      return (
        "Donald Trump"
      )
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
    }
  }
  return (
    "Donald Trump"
  )
}
