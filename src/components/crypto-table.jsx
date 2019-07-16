import React, {Fragment} from 'react';
import { Button, Spinner, Table} from "react-bootstrap";

const CryptoTable = ({data, loading, fetchCryptocurrenciesRequest}) => {
    const renderSpinner = loading && <Spinner animation="grow" variant="primary" />;
    return (
        <Fragment>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>#</th>
                    <th>Имя</th>
                    <th>Цена</th>
                    <th>Изменение(7д.)</th>
                </tr>
                </thead>
                <tbody>
                {data.map(({key, name, priceUsd, percentChange7d}, id) => {
                    return(
                        <tr key = {key}>
                            <td>{id + 1}</td>
                            <td>{name}</td>
                            <td>{priceUsd}$</td>
                            <td>{percentChange7d}%</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
            { renderSpinner }
        </Fragment>
    );
};

export default CryptoTable;