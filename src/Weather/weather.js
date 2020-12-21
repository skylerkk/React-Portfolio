import React, { useState } from 'react';
import axios from 'axios';

function Weather() {

    const [zipCode, setZipCode] = useState();
    const [datas, setDatas] = useState({});

    function makeKey(zip) {
        return `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=93d8d41cef849260114c31800c573050`;
    }

    async function getWeather() {
        await axios.get(makeKey(zipCode))
            .then((data) => {
                console.log(data);
                setDatas(data);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='text-center'>
            <div className="form-group">
                <h4>ZipCode:</h4>
                <input onChange={e => setZipCode(e.target.value)} value={zipCode} type="number" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter ZipCode" />
            </div>
            <button className='btn btn-secondary' onClick={() => getWeather()}>Submit</button>
            {Object.keys(datas).length > 0 &&
                <div>
                    <h1>City</h1>
                    <p>{datas.data.name}</p>
                    <h1>Weather</h1>
                    <p>{datas.data.weather[0].main}</p>
                    <h1>Temperature</h1>
                    <p>{(((datas.data.main.temp - 273.15) * 9/5 ) + 32).toFixed(2)}</p>
                </div>
            }
        </div>
    );
}

export default Weather;
