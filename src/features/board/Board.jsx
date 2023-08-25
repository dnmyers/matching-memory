import { useSelector } from 'react-redux';

import { CardRow } from './cardRow/CardRow.jsx';
import { selectBoard } from './boardSlice.jsx';

export const Board = () => {
    const currentBoard = useSelector(selectBoard);

    const numberOfCards = currentBoard.length;
    const columns = 3;
    const rows = Math.floor(numberOfCards / columns);

    // Utility Function
    const getRowCards = (row) => {
        const rowCards = [];

        for (let j = 0; j < columns; j++) {
            const cardIndex = row * columns + j;

            rowCards.push(currentBoard[cardIndex]);
        }

        return rowCards;
    };

    let content = [];
    for (let row = 0; row < rows; row++) {
        const rowCards = getRowCards(row);

        content.push(
            <CardRow
                key={row}
                cards={rowCards}
            />
        );
    }

    return <div className="cards-container">{content}</div>;
};
