import React, { useState, useContext } from 'react';
import AppContext, { AppProvider } from '../Utilities/AppContext';

function Page1() {

    const {setPage, page} = useContext(AppContext);

    return (
        <div>
            <h1>Pick a number form 01-99</h1>
            <button className='btn btn-primary' onClick={()=>setPage(2)}>Next!</button>
            <button  className='btn btn-primary' onClick={()=>setPage(0)}>Reset!</button>
        </div>
    );
}

export default Page1;
