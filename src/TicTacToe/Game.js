import React, {useState} from 'react';
import Board from './Board';

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ];
    for (let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [step, setStep] = useState(0);
    const [isNext, setIsNext] = useState(true);
    const winner = calculateWinner(history[step]);

    const handleClick = i => {
        const time = history.slice(0, step + 1);
        const current = time[step];
        const squares = [...current];
        if (winner || squares[i]) return;
        squares[i] = isNext ? 'X' : 'O';
        setHistory([...time, squares]);
        setStep(time.length);
        setIsNext(!isNext);
    }

    const next = stepper => {
        setStep(stepper);
        setIsNext(stepper % 2 === 0);
    }

    const renderMoves = () =>
    history.map((_step, move) => {
        const destination = move ? `Got to move #${move}` : `Go to Start`;
        return (
            <li key={move}>
                <button className= "btn btn-primary text-white" onClick={() => next(move)}>{destination}</button>
            </li>
        );
    });

    return(
        <div>
            <Board squares={history[step]} onClick={handleClick} />
            <div>
                {winner ? `Winner: ${winner}` : `Next Player: ${isNext ? 'X' : 'O'}`}
            </div>
        </div>
    )
}
export default Game;