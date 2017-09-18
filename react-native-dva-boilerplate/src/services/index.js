// import request from '../utils/request';

export function getChannelList() {
  return fetch('http://rapapi.org/mockjsdata/24055/channel/getChannelList', { method: 'POST', })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => { console.error(error); });
}