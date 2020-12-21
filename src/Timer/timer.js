import React, { useState } from 'react'

function Timer() {

    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    }

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    }

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 });
    }

    return (
        <div>
            <div className='text-center'>
                <div className ='py-2'>
                    {(time.h >= 10) ? time.h : "0" + time.h}:
                    {(time.m >= 10) ? time.m : "0" + time.m}:
                    {(time.s >= 10) ? time.s : "0" + time.s}:
                    {(time.ms >= 10) ? time.ms : "0" + time.ms}
                </div>
                <div>
                    {(status === 0) ?
                        <button onClick={start} className='btn btn-secondary'>Start</button>
                        : ""
                    }
                    {(status === 1) ?
                        <div>
                            <button onClick={stop} className='btn btn-secondary'>Stop</button>
                            <button onClick={reset} className='btn btn-secondary'>Reset</button>
                        </div>
                        : ""
                    }
                    {(status === 2) ?
                        <div>
                            <button onClick={start} className='btn btn-secondary'>Resume</button>
                            <button onClick={reset} className='btn btn-secondary'>Reset</button>
                        </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default Timer;
