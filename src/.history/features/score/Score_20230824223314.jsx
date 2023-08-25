import { useSelector } from 'react-redux';

import { selectMatchedIDs } from '../board/boardSlice';

export const Score = () => {
    return (
        <div className="score-container">Matched: 0</div>
    );
};