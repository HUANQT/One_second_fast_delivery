import { useRequest } from "ahooks";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import { DatePicker } from "antd";
import { getanaLysisTotal, getOrderData } from "../../service";
const { RangePicker } = DatePicker;
function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  const defaultCofig = {
    format(draft) {
      return draft?.data?.data;
    },
    manual: true,
  };
  // 数据总览
  const { data: anaLysisTotal, run: anaLysisTotalrun } = useRequest(
    getanaLysisTotal,
    defaultCofig
  );
  // 订单数据
  const { data: OrderData, run } = useRequest(
    () =>
      getOrderData({
        beginDate: 20200531,
        endDate: 20290630,
      }),
    defaultCofig
  );
  useEffect(() => {
    anaLysisTotalrun();
    run();
    // if (anaLysisTotal) {
    //   setIsLoading = false;
    // }
  }, []);

  // if (isLoading) {
  //   return <>加载中</>;
  // }

  return (
    <>
      {/* 数据总览 */}
      <div className="text-[24px] text-[500]">数据总览</div>
      <div className="mt-[60px] flex justify-between ">
        {/* 用户人数 */}
        <div className="flex items-center shadow-2xl w-[23%] h-[100px] border-[1px] rounded-[5px]">
          <div className=" relative ml-[20px]">
            <div className="top-[-30px] absolute w-[60px] h-[60px] rounded-[9px] bg-[#EE862A]">
              <Icon
                icon="tabler:user-filled"
                className="text-[30px] text-[#fff] ml-[30px] mt-[30px]"
              />
            </div>
            <div className=" w-[60px] text-center">
              <div className="mt-[30px] text-[12px] text-[#999]">昨日新增</div>
              <div>{anaLysisTotal?.orderCompleteTotal}人</div>
            </div>
          </div>
          <div className="ml-[40px]">
            <div className="tet-[14px]">总用户数</div>
            <div>
              <span className="text-[25px] mr-[2px]">
                {anaLysisTotal?.userTotal}
              </span>
              人
            </div>
          </div>
        </div>
        {/* 总盈利 */}
        <div className="flex items-center shadow-2xl w-[23%] h-[100px] border-[1px] rounded-[5px]">
          <div className=" relative ml-[20px]">
            <div className="top-[-30px] absolute w-[60px] h-[60px] rounded-[9px] bg-[#EE862A]">
              <Icon
                icon="tabler:user-filled"
                className="text-[30px] text-[#fff] ml-[30px] mt-[30px]"
              />
            </div>
            <div className=" w-[60px] text-center">
              <div className="mt-[30px] text-[12px] text-[#999]">昨日新增</div>
              <div>{anaLysisTotal?.incomeTotal}元</div>
            </div>
          </div>
          <div className="ml-[40px]">
            <div className="tet-[14px]">总盈利</div>
            <div>
              <span className="text-[25px] mr-[2px]">
                {anaLysisTotal?.tradeTotal}
              </span>
              元
            </div>
          </div>
        </div>
        {/* 总交易额 */}
        <div className="flex items-center shadow-2xl w-[23%] h-[100px] border-[1px] rounded-[5px]">
          <div className=" relative ml-[20px]">
            <div className="top-[-30px] absolute w-[60px] h-[60px] rounded-[9px] bg-[#EE862A]">
              <Icon
                icon="tabler:user-filled"
                className="text-[30px] text-[#fff] ml-[30px] mt-[30px]"
              />
            </div>
            <div className=" w-[60px] text-center">
              <div className="mt-[30px] text-[12px] text-[#999]">昨日新增</div>
              <div>{anaLysisTotal?.yesterdayOrderCompleteTotal}元</div>
            </div>
          </div>
          <div className="ml-[40px]">
            <div className="tet-[14px]">总交易额</div>
            <div>
              <span className="text-[25px] mr-[2px]">
                {anaLysisTotal?.yesterdayUserTotal}
              </span>
              元
            </div>
          </div>
        </div>
        {/* 订单完成量 */}
        <div className="flex items-center shadow-2xl w-[23%] h-[100px] border-[1px] rounded-[5px]">
          <div className=" relative ml-[20px]">
            <div className="top-[-30px] absolute w-[60px] h-[60px] rounded-[9px] bg-[#EE862A]">
              <Icon
                icon="tabler:user-filled"
                className="text-[30px] text-[#fff] ml-[30px] mt-[30px]"
              />
            </div>
            <div className=" w-[60px] text-center">
              <div className="mt-[30px] text-[12px] text-[#999]">昨日新增</div>
              <div>{anaLysisTotal?.yesterdayIncomeTotal}个</div>
            </div>
          </div>
          <div className="ml-[40px]">
            <div className="tet-[14px]">订单完成量</div>
            <div>
              <span className="text-[25px] mr-[2px]">
                {anaLysisTotal?.yesterdayTradeTotal}
              </span>
              个
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] border-b my-[24px]"></div>
      {/* 数据详情 */}
      <div className=" ">
        <div className="flex justify-between">
          {/* 用户数据曲线 */}
          <div className=" w-[49%] border-[1px] rounded-[5px]">
            <div className=" p-[20px]">
              <div className="text-[20px] text-[#999]">用户数据曲线</div>
              <div className="flex justify-between items-center mt-[12px]">
                <div>按时间查询:</div>
                <div className="ml-[4px] ">
                  <RangePicker
                    className="h-[40px]"
                    renderExtraFooter={() => "extra footer"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 订单数据 */}
          <div className=" w-[49%] border-[1px] rounded-[5px]">
            <div className="p-[20px]">
              <div className="text-[20px] text-[#999]">订单数据</div>
              <div className="flex justify-between items-center mt-[12px]">
                <div>按时间查询:</div>
                <div className="ml-[4px] ">
                  <RangePicker
                    className="h-[40px]"
                    renderExtraFooter={() => "extra footer"}
                  />
                </div>
              </div>
              <div className="flex-wrap flex justify-between">
                <div className="w-[180px] h-[125px] items-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center rounded-tr-[8px] rounded-bl-[8px] w-[30px] h-[30px] bg-[rgb(0,204,102)]">
                      <Icon
                        icon="material-symbols:order-approve-outline-rounded"
                        className="text-white text-[18px]"
                      />
                    </div>
                    <div className="text-[#999] text-[12px] mt-[2px]">
                      已完成
                    </div>
                    <div className="text-[18px]">{OrderData?.complete}个</div>
                  </div>
                </div>
                <div className="w-[180px] h-[125px] items-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center rounded-tr-[8px] rounded-bl-[8px] w-[30px] h-[30px] bg-[rgb(255,51,0)]">
                      <Icon
                        icon="material-symbols:order-approve-outline-rounded"
                        className="text-white text-[18px]"
                      />
                    </div>
                    <div className="text-[#999] text-[12px] mt-[2px]">
                      待确认
                    </div>
                    <div className="text-[18px]">
                      {OrderData?.waitConfirm}个
                    </div>
                  </div>
                </div>
                <div className="w-[180px] h-[125px] items-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex justify-center items-center
                    rounded-tr-[8px] rounded-bl-[8px] w-[30px] h-[30px] bg-[rgb(255,102,102)]"
                    >
                      <Icon
                        icon="material-symbols:order-approve-outline-rounded"
                        className="text-white text-[18px]"
                      />
                    </div>
                    <div className="text-[#999] text-[12px] mt-[2px]">
                      配送中
                    </div>
                    <div className="text-[18px]">{OrderData?.sending}个</div>
                  </div>
                </div>
                <div className="w-[180px] h-[125px] items-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex justify-center items-center
                    rounded-tr-[8px] rounded-bl-[8px] w-[30px] h-[30px] bg-[rgb(255,102,51)]"
                    >
                      <Icon
                        icon="material-symbols:order-approve-outline-rounded"
                        className="text-white text-[18px]"
                      />
                    </div>
                    <div className="text-[#999] text-[12px] mt-[2px]">
                      待接单
                    </div>
                    <div className="text-[18px]">{OrderData?.waitPay}个</div>
                  </div>
                </div>
                <div className="w-[180px] h-[125px] items-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex justify-center items-center
                    rounded-tr-[8px] rounded-bl-[8px] w-[30px] h-[30px] bg-[rgb(0,153,255)]"
                    >
                      <Icon
                        icon="material-symbols:order-approve-outline-rounded"
                        className="text-white text-[18px]"
                      />
                    </div>
                    <div className="text-[#999] text-[12px] mt-[2px]">
                      待支付
                    </div>
                    <div className="text-[18px]">
                      {OrderData?.waitReceive}个
                    </div>
                  </div>
                </div>
                <div className="w-[180px] h-[125px] items-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex justify-center items-center
                    rounded-tr-[8px] rounded-bl-[8px] w-[30px] h-[30px] bg-[rgb(170,170,170)]"
                    >
                      <Icon
                        icon="material-symbols:order-approve-outline-rounded"
                        className="text-white text-[18px]"
                      />
                    </div>
                    <div className="text-[#999] text-[12px] mt-[2px]">
                      已取消
                    </div>
                    <div className="text-[18px]">{OrderData?.cancel}个</div>
                  </div>
                </div>
                <div className="w-[180px] h-[125px] items-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex justify-center items-center
                    rounded-tr-[8px] rounded-bl-[8px] w-[30px] h-[30px] bg-[rgb(51,51,51)]"
                    >
                      <Icon
                        icon="material-symbols:order-approve-outline-rounded"
                        className="text-white text-[18px]"
                      />
                    </div>
                    <div className="text-[#999] text-[12px] mt-[2px]">
                      已关闭
                    </div>
                    <div className="text-[18px]">{OrderData?.close}个</div>
                  </div>
                </div>
                <div className="w-[180px] h-[125px] items-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex justify-center items-center
                    rounded-tr-[8px] rounded-bl-[8px] w-[30px] h-[30px] bg-[rgb(255,102,103)]"
                    >
                      <Icon
                        icon="material-symbols:order-approve-outline-rounded"
                        className="text-white text-[18px]"
                      />
                    </div>
                    <div className="text-[#999] text-[12px] mt-[2px]">
                      已退款
                    </div>
                    <div className="text-[18px]">{OrderData?.refund}个</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 订单数据曲线 */}
      <div className="mt-[10px] border-[1px] rounded-[5px]">
        <div className=" p-[20px]">
          <div className="text-[20px] text-[#999]">订单数据曲线</div>
          <div className="flex  items-center mt-[12px]">
            <div>按时间查询:</div>
            <div className="ml-[4px] ">
              <RangePicker
                className="h-[40px]"
                renderExtraFooter={() => "extra footer"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
