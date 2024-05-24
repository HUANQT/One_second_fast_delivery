// import { useEffect, useState, useCallback } from "react";
// const defaultCofig = {
//   format(draft) {
//     return draft;
//   },
//   manual: false,
// };
// export const useRequest = function (promiseGenerater, config) {
//   let [loading, setLoading] = useState(true);
//   let [error, setError] = useState(null);
//   let [data, setData] = useState(null);
//   const option = Object.assign(defaultCofig, config);
//   // useCallback作用是：缓存函数 让该函数在组件重新渲染的时候内存地址不发生变化
//   // 只有在useCallback的第二个依赖项发生变化的时候才会更新内存地址
//   const run = useCallback(() => {
//     promiseGenerater()
//       .then(function (res) {
//         setData(() => option.format(res));
//       })
//       .catch(function (err) {
//         setError(() => err);
//       })
//       .finally(function () {
//         setLoading(false);
//       });
//   }, [option, promiseGenerater]);
//   useEffect(() => {
//     if (!option.manual) run();
//   }, [option, run]);
//   return { loading, error, data, run: option.manual && run };
// };

import { useEffect, useCallback } from "react";
import { useState } from "react";

const defaultCofig = {
  format(draft) {
    return draft;
  },
  manual: false,
};

export const useRequest = function (promiseGenerater, config = defaultCofig) {
  let [loading, serLoading] = useState(true);
  let [error, setError] = useState(null);
  let [data, setDate] = useState(null);
  const option = Object.assign(defaultCofig, config);
  //   useCallback缓存函数，让该函数在组件重新渲染的时候，内存地址不发生变化
  // 只有在useCallback第二个依赖项发生变化的时候才会更新内存地址
  const run = useCallback(() => {
    promiseGenerater()
      .then(function (res) {
        setDate(() => option.format(res));
      })
      .catch(function (err) {
        setError(() => err);
        console.log(err);
      })
      .finally(function () {
        serLoading(false);
      });
  }, [option, promiseGenerater]);
  useEffect(() => {
    if (!option.manual) run();
  }, [option, run]);

  return { loading, error, data, run: option.manual && run };
};
