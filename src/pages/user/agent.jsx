import { Input, Select, Button, Table } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const columns = [
  {
    title: "编号",
    dataIndex: "agentAccount",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "账号",
    dataIndex: "agentAccount",
  },
  {
    title: "手机号码",
    dataIndex: "mobileNumber",
  },
  {
    title: "姓名",
    dataIndex: "realName",
  },
  {
    title: "状态",
    dataIndex: "status",
  },
  {
    title: "时间",
    dataIndex: "updateTime",
  },
  {
    title: "操作",
    dataIndex: "updatedBy",
  },
];

function Agent() {
  return (
    <>
      <div>
        <div className="text-[24px] ">代理列表</div>
        <div className="mt-[20px] border-b pb-[20px] ">
          <div className="h-[90px] my-[24px] flex justify-between flex-wrap">
            <Input placeholder="代理编号" className="w-[200px] h-[40px]" />
            <Input placeholder="账号" className="w-[200px] h-[40px]" />
            <Input placeholder="手机号" className="w-[200px] h-[40px]" />
            <Input placeholder="昵称" className="w-[200px] h-[40px]" />
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
                height: 40,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </div>
          <Button className="w-[120px] h-[40px] px-[14px]">取消</Button>
          <Button
            type="primary"
            className="ml-[2px] w-[120px] h-[40px] px-[14px]"
          >
            搜索
          </Button>
        </div>
        <div className="mt-[30px] ">
          <Button type="primary" className=" h-[40px]">
            添加代理
          </Button>
        </div>
        <Table columns={columns} type="checkbox" className="pt-0" />
      </div>
    </>
  );
}
export default Agent;
