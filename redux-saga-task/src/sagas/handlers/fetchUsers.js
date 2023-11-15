import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchUsers";

function* handleGetUsers() {
  try {
    const users = yield call(fetchGetUsers);  //fetch data from the url given in request folder
    yield put({ type: "GET_USERS_SUCCESS", users: users }); //data that is stored in user variable will be put in users key
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
}

export default watcherUserSaga;
