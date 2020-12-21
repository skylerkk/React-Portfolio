import React from 'react';

const style = {
    border: '5px solid',
    fontSize: '50px',
    outline: 'none'
}

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square;