import logo from './logo.svg';
import './App.css';
import Clock from './Clock/clock';
import Timer from './Timer/timer';
import MindReader from './MindReader/mindread'
import Weather from './Weather/weather';
import ToDo from './Todo/Todo';
import PuzzleSlider from './PuzzleSlider/PuzzleSlider'
import TicTacToe from './TicTacToe/Game';
import Calc from './Calculator/Calc';
import { AppProvider } from './Utilities/AppContext'
import React, { useState } from 'react'
import './theme_1608662644083.css';

function App() {

  return (
    <AppProvider>
      <div></div>
      <div className= "container-fluid bg-primary">
        <div className='container bg-secondary'>
          <div className='row'>
            <h1 className='text-center col-12'>React Portfolio</h1>
            <h3 className='text-center col-12'>Skyler Kuretza</h3>
            <p className='text-center col-12'> Email: Kuretza.skyler@gmail.com</p>
            <p className='text-center col-12'> Phone: (502) 316 - 5117</p>
            <p className='text-center col-12'> LinkedIn: <a href="https://www.linkedin.com/in/skyler-kuretza">https://www.linkedin.com/in/skyler-kuretza</a></p>
            <p className='text-center col-12'> My Blog: <a href="https://blog-ea661.web.app/">https://blog-ea661.web.app/</a></p>
            <div className="card bg-secondary col-lg-6 col-md-12">
              <h1 className="card-title text-center">Weather</h1>
              <div className="container" style={{ margin: "auto" }}>
                <div className="card-body">
                  <div className="calcapp" ><Weather /></div>
                </div>
              </div>
            </div>
            <div className="card bg-secondary col-lg-6 col-md-12">
              <h1 className="card-title text-center">Minder Reader</h1>
              <div className="container" style={{ margin: "auto" }}>
                <div className="card-body">
                  <div className="calcapp" ><MindReader /></div>
                </div>
              </div>
            </div>
            <div className="card bg-secondary col-lg-6 col-md-12">
              <h1 className="card-title text-center">Timer</h1>
              <div className="container" style={{ margin: "auto" }}>
                <div className="card-body">
                  <div className="calcapp" ><Timer /></div>
                </div>
              </div>
            </div>
            <div className="card bg-secondary col-lg-6 col-md-12">
              <h1 className="card-title text-center">Clock</h1>
              <div className="container" style={{ margin: "auto" }}>
                <div className="card-body">
                  <div className="calcapp" ><Clock /></div>
                </div>
              </div>
            </div>
            <div className="card bg-secondary col-lg-6 col-md-12">
              <h1 className="card-title text-center">ToDo</h1>
              <div className="container" style={{ margin: "auto" }}>
                <div className="card-body">
                  <div className="calcapp" ><ToDo /></div>
                </div>
              </div>
            </div>
            <div className="card bg-secondary col-lg-6 col-md-12">
              <h1 className="card-title text-center">Puzzle Slider</h1>
              <div className="container" style={{ margin: "auto" }}>
                <div className="card-body">
                  <div className="calcapp" ><PuzzleSlider /></div>
                </div>
              </div>
            </div>
            <div className="card bg-secondary col-lg-6 col-md-12">
              <h1 className="card-title text-center">Tic Tac Toe</h1>
              <div className="container" style={{ margin: "auto" }}>
                <div className="card-body">
                  <div className="calcapp" ><TicTacToe /></div>
                </div>
              </div>
            </div>
            <div className="card bg-secondary col-lg-6 col-md-12">
              <h1 className="card-title text-center">Calculator</h1>
              <div className="container" style={{ margin: "auto" }}>
                <div className="card-body">
                  <div className="calcapp" ><Calc /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
