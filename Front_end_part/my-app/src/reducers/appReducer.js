const reducer = (state, action) => {
    switch (action.type) {
        case "POP_UP":
            console.log(state);
            return !state
        default:
        return state;
  }
};

export default reducer