let initialState = {
  count: 0,
};

// Reducer는 항상 return을 해줘야한다!
function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    default:
      return { ...state };
  }
}

export default reducer;
