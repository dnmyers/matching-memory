import { useSelector } from 'react-redux';

import { CardRow } from './cardRow/CardRow.js';
import { selectBoard } from './boardSlice.js';

export const Board = () => {
    const currentBoard = useSelector(selectBoard);


    const numberOfCards = 0;
    const columns = 3;
    const rows = Math.floor(numberOfCards / columns);

    const getRowCards = (row) => {
        const rowCards = [];
        for (let j = 0; j < columns; j++) {
            const cardIndex = row * columns + j;
            // Implement selected data below
            rowCards.push({});
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
