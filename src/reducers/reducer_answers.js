export default function(state = null, action) {
  switch(action.type) {
  case 'UPDATE_ANSWERS':
    switch(action.gameState) {
    case 4:
      return [
        "1Hilary Clinton",
        "Mike Pence",
        "Rob Haywood",
        "Donald Trump"
      ]
    case 5:
      return [
        "2Hilary Clinton",
        "Mike Pence",
        "Rob Haywood",
        "Donald Trump"
      ]
    case 6:
      return [
        "3Hilary Clinton",
        "Mike Pence",
        "Rob Haywood",
        "Donald Trump"
      ]
    case 7:
      return [
        "4Hilary Clinton",
        "Mike Pence",
        "Rob Haywood",
        "Donald Trump"
      ]
    case 8:
      return [
        "5Hilary Clinton",
        "Mike Pence",
        "Rob Haywood",
        "Donald Trump"
      ]
    case 9:
      return [
        "6Hilary Clinton",
        "Mike Pence",
        "Rob Haywood",
        "Donald Trump"
      ]
    case 10:
      return [
        "7Hilary Clinton",
        "Mike Pence",
        "Rob Haywood",
        "Donald Trump"
      ]
    case 11:
      return [
        "8Hilary Clinton",
        "Mike Pence",
        "Rob Haywood",
        "Dnald Trump"
      ]
    }
  }
  return [
    "Defult Hilary Clinton",
    "Mike Pence",
    "Rob Haywood",
    "Donald Trump"
  ]
}
