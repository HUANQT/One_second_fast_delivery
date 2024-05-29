import { request } from "./http.js";

export const getCode = () => request.get("/admin/verifycode");

// 数据总览
export const getanaLysisTotal = () => request.get("admin/analysis/total");

// 订单数据
export const getOrderData = (params) =>
  request.get("admin/analysis/order/status", { params });
