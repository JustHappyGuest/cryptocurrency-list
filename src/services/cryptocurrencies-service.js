import {get} from "axios";
import {API_ADDRESS, API_LIMIT} from "../config";

const _transformCryptocurrencies = (data) => (data.map(({id, name, price_usd, percent_change_7d}) => ({key: id, name, priceUsd: price_usd, percentChange7d: percent_change_7d })));



export const getCryptocurrencies = async (start = 0, limit = API_LIMIT) => {
    const res = await get(`${API_ADDRESS}?start=${start}&limit=${limit}`);
    if(res.status !== 200) return new Error();
    if(!res.data.data) throw new Error("end");
    return _transformCryptocurrencies(res.data.data);
}