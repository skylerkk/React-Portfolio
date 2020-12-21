import React, { useState, useEffect, useRef } from 'react'

function Calc() {
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus());

    function handleClick(e) {
        setResult(result.concat(e.target.name));
    }

    function backspace() {
        setResult(result.slice(0, -1));
    }
    function clear() {
        setResult("");
    }
    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Invalid");
        }
    }

    return (
        <div className="container">
            <form>
                <input type='text' value={result} ref={inputRef} className="bg-white text-secondary" />
            </form>
            <div className="row">
                <div className="col-6">
                    <button id="clear" onClick={clear}>C</button>
                </div>
                <div className='col-3'>
                    <button id="backspace" onClick={backspace}>bksp</button>
                </div>
                <div className='col-3'>
                    <button id="op" name="+" onClick={handleClick}>+</button>
                </div>
                <div className='col-3'>
                    <button name="7" id="num" onClick={handleClick}>7</button>
                </div>
                <div className='col-3'>
                    <button name="8" id="num" onClick={handleClick}>8</button>
                </div>
                <div className='col-3'>
                    <button name="9" id="num" onClick={handleClick}>9</button>
                </div>
                <div className='col-3'>
                    <button id="op" name="-" onClick={handleClick}>-</button>
                </div>
                <div className='col-3'>
                    <button name="4" id="num" onClick={handleClick}>4</button>
                </div>
                <div className='col-3'>
                    <button name="5" id="num" onClick={handleClick}>5</button>
                </div>
                <div className='col-3'>
                    <button name="6" id="num" onClick={handleClick}>6</button>
                </div>
                <div className='col-3'>
                    <button id="op" name="*" onClick={handleClick}>*</button>
                </div>
                <div className='col-3'>
                    <button name="1" id="num" onClick={handleClick}>1</button>
                </div>
                <div className='col-3'>
                    <button name="2" id="num" onClick={handleClick}>2</button>
                </div>
                <div className='col-3'>
                    <button name="3" id="num" onClick={handleClick}>3</button>
                </div>
                <div className='col-3'>
                    <button id="op" name="/" onClick={handleClick}>/</button>
                </div>
                <div className='col-3'>
                    <button name='.' id='num' onClick={handleClick}>.</button>
                </div>
                <div className='col-3'>
                    <button id='result' onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calc;