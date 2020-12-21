import React, { useState, useContext } from 'react';
import AppContext, { AppProvider } from '../Utilities/AppContext';

function Page2() {

    const {setPage, page} = useContext(AppContext);

    return (
        <div>
            <h1>Add both digits together to get a new number</h1>
            <button className='btn btn-secondary' onClick={() => setPage(3)}>Next</button>
            <p>Ex: 14 is 1 + 4 = 5</p>
            <p>Click next to proceed</p>
            <button className='btn btn-secondary' onClick={() => setPage(0)}>Reset</button>
        </div>
    );
}

export default Page2;
