import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useRequest } from "ahooks";
import { getFakerMenu } from "./mock";
import Loading from "./components/loading";
import Error404 from "./error/404";
import { array2tree } from "./utils/index.jsx";
import { useEffect } from "react";

export const router = createBrowserRouter([{ path: "*", Component: Error404 }]);
function App() {
  const { loading, data: res } = useRequest(getFakerMenu);

  useEffect(() => {
    if (res?.menus) {
      console.log(res.menus);
      const userMenu = res.menus;
      const tree = array2tree(userMenu);
      console.log(tree);
      tree.forEach((item) => router.routes.push(item));
      router.navigate(window.location.pathname);
    }
  }, [res]);

  if (loading) return <Loading />;

  return (
    <RouterProvider router={router}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#955ce6",
          },
        }}
      ></ConfigProvider>
    </RouterProvider>
  );
}

export default App;
