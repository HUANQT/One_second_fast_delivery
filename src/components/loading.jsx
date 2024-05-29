// 当我的组件没有加载完成不渲染页面
import { Icon } from "@iconify/react";
function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.1)] flex items-center justify-center">
      <Icon
        icon="eos-icons:loading"
        width={80}
        height={80}
        style={{ color: "#185fec" }}
      />
    </div>
  );
}

export default Loading;
