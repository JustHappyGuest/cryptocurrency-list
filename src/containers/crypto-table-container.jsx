import React, {useEffect, useState} from 'react';
import CryptoTable from "../components/crypto-table";
import {connect} from "react-redux";
import {fetchCryptocurrenciesRequest} from "../ducks/cryptocurrencies";
import {Alert} from "react-bootstrap";

const CryptoTableContainer = ({fetchCryptocurrenciesRequest, loading, error, data, ...rest}) => {
    const [lockScrollEvent, setLockScrollEvent] = useState(loading);
    useEffect(()=>{fetchCryptocurrenciesRequest()}, []);
    useEffect(()=>{if(!loading)setLockScrollEvent(loading)}, [loading]);
    useEffect(()=>{
        const scrollHandler = () => {
            if(lockScrollEvent) return;
            if(window.pageYOffset >= document.body.clientHeight - 1000) {
                setLockScrollEvent(true);
                fetchCryptocurrenciesRequest(data.length)
            }
        }
        window.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            window.removeEventListener("scroll", scrollHandler);
        }
    });
    if(error) return <Alert variant="danger">Ошибка загрузки</Alert>;
    return <CryptoTable {...{...rest, loading, data, fetchCryptocurrenciesRequest}} />
}

const mapStateToProps = ({cryptocurrencies: {data, loading, error}}) => ({data, loading, error});

export default connect(mapStateToProps, {fetchCryptocurrenciesRequest})(CryptoTableContainer);