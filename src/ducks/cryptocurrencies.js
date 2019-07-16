import {Record} from "immutable";
import {takeEvery, put, call} from "redux-saga/effects";
import {getCryptocurrencies} from "../services/cryptocurrencies-service";

const cryptocurrenciesRecord = new Record({
    data: [],
    loading: true,
    error: null
});

const FETCH_CRYPTOCURRENCIES_REQUEST    = "FETCH_CRYPTOCURRENCIES_REQUEST";
const FETCH_CRYPTOCURRENCIES_SUCCESS    = "FETCH_CRYPTOCURRENCIES_SUCCESS";
const FETCH_CRYPTOCURRENCIES_FAILURE    = "FETCH_CRYPTOCURRENCIES_FAILURE";
const CRYPTOCURRENCIES_LOADED     = "CRYPTOCURRENCIES_LOADED";

export const fetchCryptocurrenciesRequest = (dataLen) => ({type:FETCH_CRYPTOCURRENCIES_REQUEST, payload: {dataLen}});
const fetchCryptocurrenciesSuccess = (data) => ({type: FETCH_CRYPTOCURRENCIES_SUCCESS, payload:{ data }});
const fetchCryptocurrenciesFailure = () => ({type: FETCH_CRYPTOCURRENCIES_FAILURE});
const cryptocurrenciesLoaded = () => ({type: CRYPTOCURRENCIES_LOADED});

function* fetchCryptocurrencies ({payload: {dataLen}}){
    try{
        const data = yield call(getCryptocurrencies, dataLen);
        yield put(fetchCryptocurrenciesSuccess(data));
    }catch(e){
        if(e.message === "end") return yield put(cryptocurrenciesLoaded());
        yield put(fetchCryptocurrenciesFailure());
    }

}

export function* fetchCryptocurrenciesSaga(){
    yield takeEvery(FETCH_CRYPTOCURRENCIES_REQUEST, fetchCryptocurrencies);
}

export default (state = new cryptocurrenciesRecord(), {type, payload}) => {
    switch (type) {
        case FETCH_CRYPTOCURRENCIES_REQUEST:
            return state.set("loading", true);
        case FETCH_CRYPTOCURRENCIES_SUCCESS:
            const {data:_data} = state;
            const { data } = payload;
            return state
                    .set("loading", false)
                    .set("error", null)
                    .set("data", [..._data, ...data]);
        case FETCH_CRYPTOCURRENCIES_FAILURE:
            return state
                    .set("loading", false)
                    .set("error", true);
        case CRYPTOCURRENCIES_LOADED:
            return state
                    .set("loading", false);
        default:
            return state;
    }
}