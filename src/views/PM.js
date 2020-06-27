/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import part1_2 from '../pm/bai1_2.json';
import part3 from '../pm/bai3.json';
import part4 from '../pm/bai4.json';
import part5 from '../pm/bai5.json';
import part6 from '../pm/bai6.json';
import part7 from '../pm/bai7.json';
import part8 from '../pm/bai8.json';
import part9 from '../pm/bai9.json';
import part10 from '../pm/bai10.json';
import part11 from '../pm/bai11.json';
import { Tabs } from "antd";
import { App } from './OOAD';

const { TabPane } = Tabs;

export default () => {
  return (
    <div className="container mt-4">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bài 1 & 2" key="1">
          <App source={part1_2} />
        </TabPane>
        <TabPane tab="Bài 3" key="3">
          <App source={part3} />
        </TabPane>
        <TabPane tab="Bài 4" key="4">
          <App source={part4} />
        </TabPane>
        <TabPane tab="Bài 5" key="5">
          <App source={part5} />
        </TabPane>
        <TabPane tab="Bài 6" key="6">
          <App source={part6} />
        </TabPane>
        <TabPane tab="Bài 7" key="7">
          <App source={part7} />
        </TabPane>
        <TabPane tab="Bài 8" key="8">
          <App source={part8} />
        </TabPane>
        <TabPane tab="Bài 9" key="9">
          <App source={part9} />
        </TabPane>
        <TabPane tab="Bài 10" key="10">
          <App source={part10} />
        </TabPane>
        <TabPane tab="Bài 11" key="11">
          <App source={part11} />
        </TabPane>
      </Tabs>
    </div>
  );
};
