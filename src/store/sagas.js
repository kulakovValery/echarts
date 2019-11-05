import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllPersons, getSinglePerson, postPerson } from './../api';

function* getPersonsSaga(action) {
    try {
        const persons = yield call(getAllPersons);
        yield put({type: "ADD_PERSONS", payload: persons});
        yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "ADD_PERSONS_FAILED", message: e});
    }
}

function* getSinglePersonSaga(action) {
    try {
        const person = yield call(getSinglePerson, action.payload);
        yield put({type: "ADD_SINGLE_PERSON", payload: person});
        yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "ADD_SINGLE_PERSON_FAILED", message: e});
    }
}

function* postPersonSaga(action) {
    try {
        const person = yield call(postPerson, action.payload);
        yield put({type: "ADD_PERSON_TO_ARRAY", payload: person});
        yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "ADD_PERSON_TO_ARRAY_FAILED", message: e});
    }
}

function* mySaga() {
    yield takeEvery("GET_ALL_PERSONS", getPersonsSaga);
    yield takeEvery("GET_SINGLE_PERSON", getSinglePersonSaga);
    yield takeEvery("POST_PERSON", postPersonSaga);
}

export default mySaga;