import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Layout as AntdLayout, Menu, ConfigProvider } from "antd";
import { router } from "../App";

const { Sider, Header, Content } = AntdLayout;

function Layout() {
  const menuItems = router.routes.filter((item) => item);
  console.log(menuItems);
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#fff",
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#955ce6",
        },
      }}
    >
      <AntdLayout className="bg-[#F3F3F3] min-w-[1200px]">
        <Header className="bg-[#fff] h-[62px] flex justify-between">
          <div>13</div>
          <div>1234</div>
        </Header>
        <AntdLayout className="h-[830px] m-[20px] ">
          <Sider style={siderStyle} className="w-[210px] mr-[20px] ">
            <Menu mode="inline" items={menuItems} />
          </Sider>
          <Content>
            <Suspense fallback="loading...">
              <div className="bg-[#fff] p-[20px]">
                <Outlet />
              </div>
            </Suspense>
          </Content>
        </AntdLayout>
      </AntdLayout>
    </ConfigProvider>
  );
}

export default Layout;
