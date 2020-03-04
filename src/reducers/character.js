function characterReducer(state, action) {
    switch (action.type) {
      case 'select':
        return Object.assign({character: action.character}, state);
      // ... other actions ...
      default:
        return state;
    }
  }

export default characterReducer;