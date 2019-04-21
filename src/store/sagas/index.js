import { all, takeLatest } from "redux-saga/effects";

import { PlayerTypes } from "../ducks/player";
import { PodcastsTypes } from "../ducks/podcasts";

import { load } from "./podcasts";

import { init } from "./player";

export default function* rootSaga() {
  yield all([init(), takeLatest(PodcastsTypes.LOAD_REQUEST, load)]);
}
