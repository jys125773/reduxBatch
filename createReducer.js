function createReducer({
  nameSpace,
  initialState = {},
  handlers = {}
}) {
  return {
    [nameSpace](state = initialState, action) {
      const handler = handlers[action.type];
      return handler ? handler(state, action) : state;
    }
  }
}

module.exports = {
  createReducer
}