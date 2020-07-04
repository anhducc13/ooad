import React, { useState, useEffect } from "react";
import {
  CheckOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Checkbox, Radio, Card, notification, List } from "antd";

const { Group } = Checkbox;

const Content = (props) => {
  const { question, cbCheckAnswer, onNextQ, onPrevQ } = props;
  const {
    no,
    text,
    answers,
    multiple,
    isTrue,
    isFalse,
    defaultSelectCheckbox,
    defaultSelectRadio,
    image,
    showAnswer,
  } = question;
  const [selectCheckbox, setSelectCheckbox] = useState([]);
  const [selectRadio, setSelectRadio] = useState(undefined);
  const checkAnswer = () => {
    let exactly = false;
    if (!multiple) {
      const idRightAnswer = answers.find((x) => x.isRightAnswer).id;
      exactly = idRightAnswer === selectRadio;
    } else {
      const idsRightAnswer = answers
        .filter((x) => x.isRightAnswer)
        .map((x) => x.id);
      exactly =
        idsRightAnswer.every((x) => selectCheckbox.includes(x)) &&
        idsRightAnswer.length === selectCheckbox.length;
    }
    if (exactly) {
      notification.success({ message: "Chính xác", placement: "bottomRight", duration: 0.3 });
    } else {
      notification.error({ message: "Sai", placement: "bottomRight", duration: 0.3 });
    }
    cbCheckAnswer(no, exactly, multiple ? selectCheckbox : selectRadio);
  };

  const resetAnswer = () => {
    setSelectRadio(undefined);
    setSelectCheckbox([]);
    cbCheckAnswer(no, undefined, multiple ? [] : undefined);
  };
  const actions = [
    <ArrowLeftOutlined title="Câu trước" style={{ fontSize: 25, color: '#1890FF' }} key="left" onClick={onPrevQ} />,
    <SyncOutlined title="Làm lại" style={{ fontSize: 25, color: '#F56A00' }} key="reset" onClick={resetAnswer} />,
    <CheckOutlined title="Check" style={{ fontSize: 25, color: '#1890FF' }} key="checkout" onClick={checkAnswer} />,
    <ArrowRightOutlined title="Câu sau" style={{ fontSize: 25, color: '#1890FF' }} key="right" onClick={onNextQ} />,
  ];

  useEffect(() => {
    setSelectRadio(defaultSelectRadio);
    setSelectCheckbox(defaultSelectCheckbox);
  }, [defaultSelectCheckbox, defaultSelectRadio]);

  return (
    <Card bodyStyle={{ minHeight: 300 }} actions={actions}>
      <div style={{ fontSize: 22 }} className="text-primary">
        {text}
      </div>
      {image && <img className="mt-1" src={image} width="400" height="400" />}
      <div className="answer my-3">
        {multiple ? (
          <Group value={selectCheckbox} onChange={setSelectCheckbox}>
            {answers.map((el) => (
              <React.Fragment key={el.id}>
                <Checkbox
                  style={{ fontSize: 18, textOverflow: 'ellipsis' }}
                  disabled={isTrue || isFalse}
                  className="my-1"
                  value={el.id}
                >
                  {el.text}
                </Checkbox>
                <br />
              </React.Fragment>
            ))}
          </Group>
        ) : (
            <Radio.Group
              value={selectRadio}
              onChange={(e) => setSelectRadio(e.target.value)}
            >
              {answers.map((el) => (
                <React.Fragment key={el.id}>
                  <Radio
                    style={{ fontSize: 18, whiteSpace: 'normal' }}
                    disabled={isTrue || isFalse}
                    className="my-1"
                    value={el.id}
                  >
                    {el.text}
                  </Radio>
                  <br />
                </React.Fragment>
              ))}
            </Radio.Group>
          )}
      </div>
      {showAnswer && (
        <div className="my-3">
          <List
            header={<div>Đáp án đúng</div>}
            bordered
            dataSource={answers.filter((x) => x.isRightAnswer)}
            renderItem={(item) => <List.Item>{item.text}</List.Item>}
          />
        </div>
      )}
    </Card>
  );
};

export default Content;
