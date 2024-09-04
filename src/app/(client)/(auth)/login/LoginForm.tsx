"use client";
import { Button, Form, Input, Switch, Upload } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

type FieldTypeForm = {
  title?: string;
  description?: string;
  image?: object;
  isActive?: boolean;
};

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {};

  return (
    <div className="md:w-full mt-10">
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label={"شماره تماس"}
          name="title"
          rules={[{ required: true, message: "لطفا شماره تماس را وارد کنید" }]}
        >
          <Input size="large" variant="filled" className="!p-3" />
        </Form.Item>

        <Button
          htmlType="submit"
          type="primary"
          className=" w-full mt-7"
          size="large"
          style={{ padding: "24px!important" }}
        >
          ورود
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
