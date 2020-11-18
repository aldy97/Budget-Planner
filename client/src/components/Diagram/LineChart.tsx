import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import moment from "moment";
import { Record } from "../Overview/Content";
import { connect } from "react-redux";
import { RootState } from "../../reducers/index";

interface LineChartProps {
  type: "expense" | "income";
  records?: Record[];
}

// 折线图：根据记录类型展示本周的消费/收入记录
function LineChart({ type, records }: LineChartProps) {
  // 过去七天日期
  const [days, setDays] = useState<string[]>([]);
  // 过去七天每日的记录总额
  const [totalsInPastWeek, setTotalInPastWeek] = useState<number[]>([]);

  // 取得包括今天在内的七天日期📅
  const getDays = () => {
    const last7Days: string[] = [];
    for (let i = 0; i < 7; i++) {
      last7Days.push(moment(Date.now() - i * 24 * 3600 * 1000).format("MM-DD"));
    }
    setDays(last7Days.reverse());
  };

  // 根据传入的记录类型，统计过去一周每日的花费/收入
  const getTotalsInPastWeek = () => {
    const tempTotalsInPastWeek: number[] = new Array(7).fill(0);
    if (records) {
      const filteredRecords = records.filter(record => record.type === type);
      for (const record of filteredRecords) {
        const date = record.createdOn.slice(5, 10);
        if (days.includes(date)) {
          tempTotalsInPastWeek[days.indexOf(date)] += record.amount;
        }
      }
    }
    setTotalInPastWeek(tempTotalsInPastWeek);
  };

  // 两个函数的顺序不能颠倒
  useEffect(() => {
    getDays();
    getTotalsInPastWeek();
  }, [type, records]);

  const option = {
    xAxis: {
      type: "category",
      data: days,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: totalsInPastWeek,
        type: "line",
      },
    ],
  };
  return (
    <div>
      <ReactEcharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
      />
    </div>
  );
}

const mapState = (state: RootState) => {
  return {
    records: state.HomeReducer.records,
  };
};

export default connect(mapState, null)(LineChart);
