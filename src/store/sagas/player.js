import { call, put } from "redux-saga/effects";

import TrackPlayer from "react-native-track-player";

export function* init() {
  yield call(TrackPlayer.seturPlayer());
}
