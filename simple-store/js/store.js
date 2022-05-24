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
    case 'category':
      state = {...state, category: action.category};
      return state;
    case 'minPrice':
      state = {...state, minPrice: action.minPrice};
      return state;
    case 'maxPrice':
      state = {...state, maxPrice: action.maxPrice};
      return state;
    case 'brands':
      state = { ...state, brands: [...action.brands] };
      return state;
    case 'search':
      state = {...state, search: action.search};
      return state;
    case 'addCard':
      state = { ...state, card: action.card };
      // state = { ...state, card: {...action.card} };
      return state;
    default:
      return state;
  }
}