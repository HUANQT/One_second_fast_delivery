import axios from "axios";

export const request = axios.create({
  // baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app",
  baseURL: "http://localhost:5173/api",
  timeout: 5000,
});
