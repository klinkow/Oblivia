export function selectChoice(choice) {
  return {
    type: 'CHOICE_SELECTED',
    payload: choice
  };
}
