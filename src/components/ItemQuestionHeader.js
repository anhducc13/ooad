import React from 'react';
import { Avatar, Card, Checkbox, Radio } from 'antd';

const ItemQuestionHeader = props => {
    const { question, onChangeQuestion } = props;
    const { no, current, isTrue, isFalse } = question;
    const renderStyle = () => {
        if (current) {
            return { backgroundColor: '#3FA3FF' };
        }
        if (isTrue) {
            return { backgroundColor: '#87D068' };
        }
        if (isFalse) {
            return { backgroundColor: '#F56A00' };
        }
        return {};
    }
    return (
        <Avatar onClick={() => onChangeQuestion(no)} style={{ ...renderStyle(), cursor: 'pointer'}}>{no}</Avatar>
    )
};

export default ItemQuestionHeader;