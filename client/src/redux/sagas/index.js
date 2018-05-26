import axios from 'axios';

import { delay } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects'; // call, put, takeEvery, takeLatest

// 1. (worker saga): do call async to recieve data
export function* loadPhoneListAsync(action) {
  try {
    const response = yield call(axios.get, 'http://localhost:3000/phones');

    // Added a waiting time by simulating a query to a real database
    yield delay(2000);

    yield put({
      type: 'LOAD_PHONES_SUCCEEDED',
      response: response.data
    });
  } catch(e) {
    yield put({
      type: 'LOAD_PHONES_FAILED',
      response: e.message
    });
  }
}

export function* watchLoadPhoneList() {
  yield takeEvery('LOAD_PHONES', loadPhoneListAsync);
}

export default function* rootSaga() {
  yield all([
    watchLoadPhoneList()
  ]);
}