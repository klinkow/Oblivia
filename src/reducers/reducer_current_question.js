// State argument is not application state, only the state this reducer is responsible for
export default function(state = 1, action) {
  switch(action.type) {
  case 'CHOICE_SELECTED':
    return (state + 1);
  }
  return state
}
