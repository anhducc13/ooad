/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Menu } from "antd";
import { browserHistory } from '../helpers/common';

export default (props) => {
  console.log(browserHistory.location);
  const [key] = useState(browserHistory.location.pathname);
  return (
    <div className="d-flex justify-content-center">
      <Menu defaultSelectedKeys={[key]} mode="horizontal">
        <Menu.Item key="/">Quản lý dự án phần mềm</Menu.Item>
        <Menu.Item key="/ooad">PTTKHĐT (OOAD)</Menu.Item>
      </Menu>
    </div>
  );
};
