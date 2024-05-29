import { useRequest } from "../hooks/useRequest.js";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { Button, Form, Input, Alert } from "antd";
import { getCode } from "../service/index.js";

function Login() {
  const defaultCofig = {
    format(draft) {
      return draft?.data.data;
    },
    manual: true,
  };
  const { data: getCodeData, run } = useRequest(getCode, defaultCofig);
  useEffect(() => {
    run();
  }, []);

  const onFinish = (values) => {
    console.log("成功:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("失败:", errorInfo);
    <Alert message="Error" type="error" showIcon />;
    // 清空我的form表单里的所有内容
    run();
  };
  return (
    <>
      {/* login */}
      <div className="w-[800px] h-[666px] m-auto  mt-[142px]">
        <div>
          <div className="ml-20 text-[25px]">一秒快送后台管理系统</div>
          <div className="flex items-center w-[800px] h-[500px] mt-[40px] shadow-sm">
            <div className="w-[400px]">
              <img
                src="http://192.168.68.174:8888/_nuxt/assets/images/login.png"
                alt=""
              />
            </div>
            <div className="w-[400px] h-[500px]">
              <div className="text-[20px] text-center ">账号密码登录</div>
              <div className="mt-[40px] w-[400px] ">
                <Form
                  name="basic"
                  labelCol={{
                    span: 15,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "请输入账号",
                      },
                    ]}
                  >
                    <Input
                      placeholder="管理员账号"
                      className="w-[320px] h-[40px]"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "请输入密码",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="管理员密码"
                      className="w-[320px] h-[40px]"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Verification"
                    rules={[
                      {
                        required: true,
                        message: "请输入验证码",
                      },
                    ]}
                  >
                    <div>
                      <Input
                        placeholder="输入验证码"
                        className="w-[170px] h-[40px]"
                      />
                      <div
                        className="w-[150px] h-[50px] mt-[-50px] absolute right-[-60px]"
                        onClick={run}
                      >
                        <i
                          dangerouslySetInnerHTML={{ __html: getCodeData?.svg }}
                        ></i>
                      </div>
                    </div>
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className=" text-center mt-[40px]"
                    >
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
