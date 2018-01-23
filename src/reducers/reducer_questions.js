export default function(state = null, action) {
  switch(action.type) {
  case 'UPDATE_BANNER':
    switch(action.gameState) {
    case 4:
      return (
        "1. The following headline comes from today's New York Times. _________ decides to invade North Korea"
      )
    case 5:
      return (
        "2. The following headline comes from today's New York Times. _________ decides to invade North Korea"
      )
    case 6:
      return (
        "3. The following headline comes from today's New York Times. _________ decides to invade North Korea"
      )
    case 7:
      return (
        "4. The following headline comes from today's New York Times. _________ decides to invade North Korea"
      )
    case 8:
      return (
        "5. The following headline comes from today's New York Times. _________ decides to invade North Korea"
      )
    case 9:
      return (
        "6. The following headline comes from today's New York Times. _________ decides to invade North Korea"
      )
    case 10:
      return (
        "7. The following headline comes from today's New York Times. _________ decides to invade North Korea"
      )
    case 11:
      return (
        "8. The following headline comes from today's New York Times. _________ decides to invade North Korea"
      )
    }
  }
  return state
}
