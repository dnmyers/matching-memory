import { Score } from '../features/score/Score.jsx';
import { Board } from '../features/board/Board.jsx';

import './App.css'

const App = () => {
    const startGameHandler = () => {

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