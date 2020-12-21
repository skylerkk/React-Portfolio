import React, { useState, useContext } from 'react';
import AppContext, { AppProvider } from '../Utilities/AppContext';

function Page4() {

    const { setPage, page, setRandomSymbol, randomSymbol } = useContext(AppContext);
    const chars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    const ans = [];
    setRandomSymbol(chars[Math.floor(Math.random() * 10)]);
    let rightAnswer = randomSymbol;

    for (let i = 0; i <= 99; i++) {
        if (i % 9) {
            let random = chars[Math.floor(Math.random() * 10)]
            ans.push(i + " - " + random);
        }
        else {
            ans.push(i + " - " + rightAnswer)
        }
    }

    return (
        <div className='container'>
            <div className='ml-5 overflow-auto border' style={{height: 300, width: 350}}>
                {ans.map((item) => {
                    return <p> {item}</p>
                }
                )}
            </div>
            <button className='btn btn-secondary' onClick={() => setPage(5)}>Next</button>
            <p>Find your new number</p>
            <p>Note the symbol beside the number</p>
            <button className='btn btn-secondary' onClick={() => setPage(0)}>Reset</button>
        </div>
    );
}

export default Page4;
