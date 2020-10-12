import { takeLatest, all } from 'redux-saga/effects';
import { tipsTypes } from '../ducks/tips';

import { fetchGists } from './tipsSaga';

export default function* root() {
  yield all([yield takeLatest(tipsTypes.FETCH_GISTS, fetchGists)]);
}
