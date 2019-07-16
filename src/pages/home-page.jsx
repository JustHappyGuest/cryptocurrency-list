import React, {Fragment} from 'react';
import Header from "../components/header";
import CryptoTableContainer from "../containers/crypto-table-container";

const HomePage = (props) => (
    <Fragment>
        <Header/>
        <h3 className="py-2 text-left">Список криптовалют</h3>
        <CryptoTableContainer />
    </Fragment>
);

export default HomePage;