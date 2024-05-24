// import { useState } from "react";

// import Login from "./views/login.jsx";
// // import Screening from "./views/screening .jsx";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Login />
//     </>
//   );
// }

// export default App;

// 配置路由
// 使用何种性质的路由（hash、history）
// HashRouter 哈希模式 （二取一）
// BrowserRouter 历史模式
// Routes 嵌套在需要使用的模式中 用于接收接收childern
// （配置）
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screening from "./views/screening ";
function App() {
  return (
    <>
      <div>App</div>
      <BrowserRouter>
        <Routes>
          <Route path="/screening" element={<Screening />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
