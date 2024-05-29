import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
// 导航
const items = [
  {
    key: "screening",
    label: "数据总览",
    icon: <MailOutlined />,
  },
  {
    key: "sub2",
    label: "用户管理",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "proxyList",
        label: "代理列表",
      },
      {
        key: "Managers",
        label: "管理员列表",
      },
      {
        key: "userList",
        label: "用户列表",
      },
    ],
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "11",
        label: "Option 11",
      },
      {
        key: "12",
        label: "Option 12",
      },
    ],
  },
  {
    key: "grp",
    label: "Group",
    type: "group",
    children: [
      {
        key: "13",
        label: "Option 13",
      },
      {
        key: "14",
        label: "Option 14",
      },
    ],
  },
];
function Index() {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#fff",
  };
  return (
    <>
      <Layout className="bg-[#F3F3F3] min-w-[1200px]">
        <Header className="bg-[#fff] h-[62px] flex justify-between">
          <div>13</div>
          <div>1234</div>
        </Header>
        <Layout className="h-[830px] m-[20px] ">
          <Sider style={siderStyle} className="w-[210px] mr-[20px] ">
            <Menu onClick={onClick} mode="inline" items={items}></Menu>
          </Sider>
          <Content>
            <div className="bg-[#fff] p-[20px] ">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
export default Index;
