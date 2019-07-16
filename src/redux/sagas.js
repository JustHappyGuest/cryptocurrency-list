import {all} from "redux-saga/effects";
import {fetchCryptocurrenciesSaga} from "../ducks/cryptocurrencies";

export default function* (){
    yield all([
        fetchCryptocurrenciesSaga()
    ])
}