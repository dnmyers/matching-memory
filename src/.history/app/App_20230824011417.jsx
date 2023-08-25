import { useDispatch } from 'react-redux';

import { Score } from '../features/score/Score.jsx';
import { Board } from '../features/board/Board.jsx';

import { setBoard } from '../features/board/boardSlice.jsx';

import './App.css';

const App = () => {
    const dispatch = useDispatch();

    const startGameHandler = () => {
        dispatch(setBoard());
    };

    const tryAgainHandler = () => {

    };

    return (
        <div className="App">
            <Score />
            <Board />
            <footer className="footer">
                <button onClick={startGameHandler} className="start-button">
                    Start Game
                </button>
                <button onClick={tryAgainHandler} className="try-again-button">
                    Try Again
                </button>
            </footer>
        </div>
    );
};

export default App;