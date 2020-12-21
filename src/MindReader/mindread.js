import React, { useState, useContext } from 'react';
import AppContext, { AppProvider } from '../Utilities/AppContext';
import Page0 from './page0'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'

function MindReader() {

    const [page, setPage] = useState(0);
    const [randomSymbol, setRandomSymbol] = useState('');

    return (
        <AppProvider value = {{page, setPage, randomSymbol, setRandomSymbol}}>
        <div className='text-center'>
          {page === 0 && <Page0 />}
          {page === 1 && <Page1 />}
          {page === 2 && <Page2 />}
          {page === 3 && <Page3 />}
          {page === 4 && <Page4 />}
          {page === 5 && <Page5 />}

        </div>
        </AppProvider>
    );
}

export default MindReader;
