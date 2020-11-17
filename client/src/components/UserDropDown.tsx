import React, { Dispatch, SetStateAction } from "react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";

interface DropDown {
  name: string;
  logOut: Dispatch<SetStateAction<boolean>>;
}

function UserDropDown({ name, logOut }: DropDown) {
  const handleLogOutBtnClcik = () => {
    logOut(true);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogOutBtnClcik}>
          <LogoutOutlined />
          Log Out
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button>
        <UserOutlined></UserOutlined>
        {name}
      </Button>
    </Dropdown>
  );
}

export default UserDropDown;
