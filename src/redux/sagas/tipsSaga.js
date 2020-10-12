import { call, put, select } from 'redux-saga/effects';
import { getPublicGists } from 'services/github';
import { tipsTypes } from '../ducks/tips';

function* fetchGists(action) {
  yield put({ type: tipsTypes.SET_IS_LOADING, payload: true });
  let gists = [];

  const state = yield select();

  try {
    gists = yield call(() => getPublicGists(action.payload || 1));
  } catch (err) {
    gists = [];
  }
  yield put({
    type: tipsTypes.SET_GISTS,
    payload:
      state.tips.gists.length > 0 ? [...state.tips.gists, ...gists] : gists,
  });
  yield put({ type: tipsTypes.SET_IS_LOADING, payload: false });
}

export { fetchGists };
