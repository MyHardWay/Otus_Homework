const reducer = (state = {}, action) => {
    switch (action.type) {
        case "POP_UP":
            console.log(state);
            console.log(action.is_poped);

            return {
            is_poped: !state.is_poped
            }
        default:
        return state;
  }
};

export default reducer