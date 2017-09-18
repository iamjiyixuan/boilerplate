function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default {

  namespace: 'count',

  state: 0,

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *addDelay(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'add' });
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