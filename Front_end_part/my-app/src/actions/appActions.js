export const setVisibility = (state) => {
  return {
    type: 'SET_VISIBILITY',
    state
  }
}

export const PopUp = (state) => {
  console.log(state);
  return {
    type: 'POP_UP',
    is_poped: state
  }
}

