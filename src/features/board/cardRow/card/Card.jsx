/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';

import { selectVisibleIDs, flipCard, selectMatchedIDs, resetCards } from '../../boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
    const visibleIDs = useSelector(selectVisibleIDs);
    const matchedIDs = useSelector(selectMatchedIDs);
    const dispatch = useDispatch();


    // flip card action
    const flipHandler = (id) => {
        // Add action dispatch below
        dispatch(flipCard(id));
    };

    const resetCardsHandler = () => {
        dispatch(resetCards());
    }

    let cardStyle = 'resting';
    let click = () => flipHandler(id);

    let cardText = (
        <img src={cardLogo} className="logo-placeholder" alt="Card option" />
    );

    // 1st if statement
    // implement card id array membership check
    if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
        cardText = contents;
        click = () => { };
    }

    // 2nd if statement
    // implement card id array membership check
    if (matchedIDs.includes(id)) {
        cardStyle = 'matched';
    }

    // 3rd if statement
    // implement number of flipped cards check
    if (visibleIDs.length === 2) {
        cardStyle = 'no-match';
        click = () => resetCardsHandler();
    }

    return (
        <button onClick={click} className={`card ${cardStyle}`}>
            {cardText}
        </button>
    );
};
