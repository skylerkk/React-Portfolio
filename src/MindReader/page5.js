import React, { useState, useContext } from 'react';
import AppContext, { AppProvider } from '../Utilities/AppContext';

function Page5() {

    const {setPage, page, randomSymbol} = useContext(AppContext);

    return (
        <div>
            <p>Your symbol is:</p>
            <p>{randomSymbol}</p>
            <button className='btn btn-secondary' onClick={() => setPage(0)}>Reset</button>
        </div>
    );
}

export default Page5;
