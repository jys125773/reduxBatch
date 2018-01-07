const BATCH_ACTIONS = '@@redux/BATCH_ACTIONS'

function batchActions(actions) {
  return { type: BATCH_ACTIONS, payload: actions }
}

function batchReducer(reducer) {
  return function loopReducer(state, action) {
    return action.type === BATCH_ACTIONS
      ? action.payload.reduce(loopReducer, state)
      : reducer(state, action)
  }
}

module.exports = {
  batchActions,
  batchReducer
}