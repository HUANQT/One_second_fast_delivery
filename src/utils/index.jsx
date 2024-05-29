import React from "react";
import Layout from "../layout";
import { Icon } from "@iconify/react";

const pages = import.meta.glob("../pages/**/*.jsx");
console.log(pages);

export function array2tree(menu) {
  // 创建空数组存储最后的树形结构
  const result = [];
  function findChildren(parent, pid = 0) {
    // 遍历
    for (let item of menu) {
      // 判断当前菜单项的父ID与传入的pid相等
      if (item.pid === pid) {
        const child = { ...item, children: [] };
        child.key = child.id;
        child.icon = <Icon icon={child.icon} />;
        console.log(item.component);
        child.Component = item.component
          ? React.lazy(pages[item.component?.replace(/^/, "..")])
          : Layout;
        parent.push(child);
        findChildren(child.children, child.id);
      }
    }
  }
  findChildren(result);
  return result;
}
