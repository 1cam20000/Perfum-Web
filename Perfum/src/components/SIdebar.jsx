import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Switch } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Gender", "sub1", <MailOutlined />, [
    getItem("Men", "1"),
    getItem("Woman", "2"),
    getItem("Unisex", "3"),
  ]),
  getItem("Brand", "sub2", <AppstoreOutlined />, [
    getItem("Dior", "5"),
    getItem("Chanel", "6"),
    getItem("Versace", "sub3", null, [
      getItem("D&G", "7"),
      getItem("GIorgio Amarni", "8"),
    ]),
  ]),
  getItem("Type", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const SIdebar = () => {
  const [theme, setTheme] = useState("light");
  const [current, setCurrent] = useState("1");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div
      style={{
        width: "266px",
        height: "1000px",
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "auto",
          color: "#555",
          marginTop: "10px",
        }}
      >
        Filter By
      </div>
      <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default SIdebar;
