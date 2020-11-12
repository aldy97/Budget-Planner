import React from "react";
import { StyledForm } from "./LoginForm";
import { Form, Input, Button, Checkbox } from "antd";

function RegisterFrom() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleRegisterBtnClick = () => {
    console.log("test");
  };

  return (
    <StyledForm
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item rules={[{ required: true, message: "Please input your email!" }]}>
        <Input placeholder="Email:" />
      </Form.Item>

      <Form.Item rules={[{ required: true, message: "Please input your name!" }]}>
        <Input placeholder="Name:" />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Password:" />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Confirm password:" />
      </Form.Item>

      <Form.Item>
        <Button
          style={{ width: 360 }}
          type="primary"
          htmlType="submit"
          onClick={handleRegisterBtnClick}
        >
          Register
        </Button>
      </Form.Item>
    </StyledForm>
  );
}

export default RegisterFrom;
