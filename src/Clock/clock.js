import React, { useState } from 'react'

function Clock() {
    const time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time);
    const update = () => {
        let newTime = new Date().toLocaleTimeString();
        setCurrTime(newTime);
    }
    setInterval(update, 1000);

    return (
        <div>
            <div className='text-center'>
                <div>{currTime}</div>
            </div>
        </div>
    );
}

export default Clock;
