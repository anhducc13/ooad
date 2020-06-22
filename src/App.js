/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import part1 from './part1.json';
import part2 from './part2.json';
import part3 from './part3.json';
import part4 from './part4.json';
import part5 from './part5.json';
import "antd/dist/antd.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Tabs, Button } from "antd";

const { TabPane } = Tabs;

function App(props) {
  const { source } = props;
  const getQuestions = (src) => {
    return _.shuffle(
      src.map((el) => {
        const answers = _.shuffle(
          el.answers.map((x, index) => ({
            id: uuidv4(),
            text: x,
            isRightAnswer: index + 1 <= el.numOfRightAnswer,
          }))
        );
        return {
          ...el,
          answers,
          multiple: el.numOfRightAnswer > 1,
          showAnswer: false,
        };
      })
    ).map((el, index) => ({
      ...el,
      no: index + 1,
      current: index === 0,
      multiple: el.numOfRightAnswer > 1,
      defaultSelectCheckbox: el.multiple ? undefined : [],
      defaultSelectRadio: undefined,
    }));
  }
  const [questions, setQuestions] = useState(() => getQuestions(source));
  const currentQuestion = questions.find((el) => el.current);
  const handleChangeQuestion = (no) => {
    const newQuestions = questions.map((el) => {
      return {
        ...el,
        current: el.no === no,
      };
    });
    setQuestions(newQuestions);
  };

  const cbCheckAnswer = (no, exactly, currAnswers) => {
    let newQuestions = [];
    if (exactly === undefined) {
      newQuestions = questions.map((el) => {
        if (el.no === no) {
          return {
            ...el,
            isTrue: undefined,
            isFalse: undefined,
            defaultSelectCheckbox: el.multiple ? undefined : [],
            defaultSelectRadio: undefined,
            showAnswer: false,
          };
        }
        return el;
      });
    }
    if (exactly === true) {
      newQuestions = questions.map((el) => {
        if (el.no === no) {
          return {
            ...el,
            isTrue: true,
            defaultSelectCheckbox: el.multiple ? currAnswers : [],
            defaultSelectRadio: el.multiple ? undefined : currAnswers,
          };
        }
        return el;
      });
    }
    if (exactly === false) {
      newQuestions = questions.map((el) => {
        if (el.no === no) {
          return {
            ...el,
            isFalse: true,
            showAnswer: true,
            defaultSelectCheckbox: el.multiple ? currAnswers : [],
            defaultSelectRadio: el.multiple ? undefined : currAnswers,
          };
        }
        return el;
      });
    }
    setQuestions(newQuestions);
  };

  const handleNext = () => {
    if (currentQuestion.no === questions.length) {
      return;
    }
    let newQuestion = questions.map((el) => ({
      ...el,
      current: el.no === currentQuestion.no + 1,
    }));
    setQuestions(newQuestion);
  };

  const handlePrev = () => {
    if (currentQuestion.no === 1) {
      return;
    }
    let newQuestion = questions.map((el) => ({
      ...el,
      current: el.no === currentQuestion.no - 1,
    }));
    setQuestions(newQuestion);
  };

  const handleReset = () => {
    const qs = getQuestions(source);
    setQuestions(qs);
  }

  return (
    <div>
      <div className="mt-3 text-center">
        <Header onChangeQuestion={handleChangeQuestion} questions={questions} />
      </div>
      <Button className="my-1" onClick={handleReset} type="primary">Làm lại</Button>
      <div className="my-3">
        {currentQuestion && (
          <Content
            question={currentQuestion}
            cbCheckAnswer={cbCheckAnswer}
            onNextQ={handleNext}
            onPrevQ={handlePrev}
          />
        )}
      </div>
    </div>
  );
}

export default () => {
  return (
    <div className="container mt-4">
      <div style={{ fontSize: 12 }} className="text-warning text-center">
        Dịch chưa sát, đáp án không chính xác liên hệ anh &nbsp;
        <a href="https://www.facebook.com/profile.php?id=100009495502792">
          Nguyễn Văn Thành
        </a>
        . Cảm ơn đã đóng góp!
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Phần 1" key="1">
          <App source={part1} />
        </TabPane>
        <TabPane tab="Phần 2" key="2">
          <App source={part2} />
        </TabPane>
        <TabPane tab="Phần 3" key="3">
          <App source={part3} />
        </TabPane>
        <TabPane tab="Phần 4" key="4">
          <App source={part4} />
        </TabPane>
        <TabPane tab="Phần 5" key="5">
          <App source={part5} />
        </TabPane>
      </Tabs>
    </div>
  );
};
