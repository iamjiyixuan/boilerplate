import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

function* _incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

// 拦截 INCREMENT_ASYNC action，执行异步函数 incrementAsync 
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', _incrementAsync);
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ]);
}