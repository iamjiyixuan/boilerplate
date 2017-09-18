import * as API from '../services/index';

export default {

  namespace: 'channel',

  state: 0,

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getChannelList(action, { call, put }) {
      yield API.getChannelList().then(res => { console.log(res); });
    },
  },

  reducers: {

  },

};