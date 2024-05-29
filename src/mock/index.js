import res from "./res.json";

function sendData(data, delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}
export const getFakerMenu = () => {
  return sendData(res);
};
