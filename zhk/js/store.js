function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, {type: '__init__'});
  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach(fn => fn());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    }
  }
}


function rootReducer(state, action) {
  switch (action.type) {
    case 'selectFloor':
      state = {...state, floor: action.floor};
      return state;
    case 'selectFlat':
      state = {...state, flat: action.flat};
      return state;
    case 'open':
      state = {...state, open: action.open};
    default:
      return state;
  }
}
