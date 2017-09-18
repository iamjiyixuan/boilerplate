import request from '../utils/request';

export function getGankData() {
  return request('http://gank.io/api/data/Android/10/1');
}