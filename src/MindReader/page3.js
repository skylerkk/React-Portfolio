import React, { useState, useContext } from 'react';
import AppContext, { AppProvider } from '../Utilities/AppContext';

function Page3() {

    const {setPage, page} = useContext(AppContext);

    return (
        <div>
            <h1>Subtract your new number from the original</h1>
            <button className='btn btn-primary' onClick={() => setPage(4)}>Next</button>
            <p>Ex: 14 - 5 = 9</p>
            <p>Click next to proceed</p>
            <button className='btn btn-primary' onClick={() => setPage(0)}>Reset</button>
        </div>
    );
}

export default Page3;
