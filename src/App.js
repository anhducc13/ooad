/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import analysic1_25 from "./analysic1_25.json";
import analysic26_50 from "./analysic26_50.json";
import design1_25 from "./design1_25.json";
import design26_50 from "./design26_50.json";
import design51_75 from "./design51_75.json";
import design76_100 from "./design76_100.json";
import design101_125 from "./design101_125.json";
import design126_156 from "./design126_156.json";
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
        <TabPane tab="Phân tích 1-25" key="1">
          <App source={analysic1_25} />
        </TabPane>
        <TabPane tab="Phân tích 26-50" key="2">
          <App source={analysic26_50} />
        </TabPane>
        <TabPane tab="Thiết kế 1-25" key="3">
          <App source={design1_25} />
        </TabPane>
        <TabPane tab="Thiết kế 26-50" key="4">
          <App source={design26_50} />
        </TabPane>
        <TabPane tab="Thiết kế 51-75" key="5">
          <App source={design51_75} />
        </TabPane>
        <TabPane tab="Thiết kế 76-100" key="6">
          <App source={design76_100} />
        </TabPane>
        <TabPane tab="Thiết kế 101-125" key="7">
          <App source={design101_125} />
        </TabPane>
        <TabPane tab="Thiết kế 126-156" key="8">
          <App source={design126_156} />
        </TabPane>
      </Tabs>
    </div>
  );
};
