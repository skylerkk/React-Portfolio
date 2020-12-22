import React, { useState, useContext } from 'react';
import AppContext, { AppProvider } from '../Utilities/AppContext';

function Page0() {

    const {setPage, page} = useContext(AppContext);

    return (
        <div>
            <h1>I can read your mind!</h1>
            <button className='btn btn-primary'  onClick={() => setPage(1)}>Start!</button>
        </div>
    );
}

export default Page0;
