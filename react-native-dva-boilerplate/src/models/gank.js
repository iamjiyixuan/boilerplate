import * as API from '../services/index';

export default {

  namespace: 'gank',

  state: 0,

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getGankData(action, { call, put }) {
      yield API.getGankData().then(res => { console.log(res); });
    },
  },

  reducers: {

  },

};