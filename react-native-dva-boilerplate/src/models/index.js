export default {
  
    namespace: 'count',
  
    state: 0,
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      add(state, action) {
        return state + 1;
      },
      minus(state, action) {
        return state - 1;
      },
    },
  
  };