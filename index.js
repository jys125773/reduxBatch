const {
  createStore,
  combineReducers
} = require('redux')
const {
  batchActions,
  batchReducer,
} = require('./reduxBatch')
const { createReducer } = require('./createReducer')

const counterReducer = createReducer({
  nameSpace: 'counter',
  initialState: {
    value: 0,
  },
  handlers: {
    ['INCREMENT'](state, action) {

      return { ...state, value: state.value + 1 };
    }
  }
})

const rootReducer = batchReducer(combineReducers({ ...counterReducer }))
const store = createStore(rootReducer)
store.subscribe(() => {
  console.log(store.getState().counter.value)
});

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
//the totalState mutate 4 times, 4 times render, 

store.dispatch(batchActions([{ type: 'INCREMENT' }, { type: 'INCREMENT' }, { type: 'INCREMENT' }, { type: 'INCREMENT' }]))
//the mutation caused by four actions are combined to one, only 1 time render
