import React from 'react';
import ItemQuestionHeader from './ItemQuestionHeader';

const Header = (props) => {
    const { questions, onChangeQuestion } = props;
    return (
        <>
            {questions.map(el => (
                <ItemQuestionHeader onChangeQuestion={onChangeQuestion} key={el.no} question={el} />
            ))}
        </>
    )
};

export default Header;