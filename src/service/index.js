import { request } from "./http.js";

export const getCode = () => request.get("/admin/verifycode");
