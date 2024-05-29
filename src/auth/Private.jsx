// 必须要有token 才能访问其他页面

import { Navigate } from "react-router-dom";
import propTypes from "prop-types";

function Private({ children }) {
  const token = window.localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

Private.propTypes = {
  children: propTypes.node,
};

export default Private;
