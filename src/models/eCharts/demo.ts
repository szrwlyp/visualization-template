import * as echarts from "echarts/core";

export const demo1 = {
  color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
  title: {
    text: "Gradient Stacked Area Chart",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Line 1",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(128, 255, 165)",
          },
          {
            offset: 1,
            color: "rgb(1, 191, 236)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [140, 232, 101, 264, 90, 340, 250],
    },
    {
      name: "Line 2",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(0, 221, 255)",
          },
          {
            offset: 1,
            color: "rgb(77, 119, 255)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [120, 282, 111, 234, 220, 340, 310],
    },
    {
      name: "Line 3",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(55, 162, 255)",
          },
          {
            offset: 1,
            color: "rgb(116, 21, 219)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 132, 201, 334, 190, 130, 220],
    },
    {
      name: "Line 4",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(255, 0, 135)",
          },
          {
            offset: 1,
            color: "rgb(135, 0, 157)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 402, 231, 134, 190, 230, 120],
    },
    {
      name: "Line 5",
      type: "line",
      stack: "Total",
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgb(255, 191, 0)",
          },
          {
            offset: 1,
            color: "rgb(224, 62, 76)",
          },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 302, 181, 234, 210, 290, 150],
    },
  ],
};

export const demo2 = {
  title: {
    text: "ECharts 入门示例",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      itemStyle: {
        // 颜色渐变函数，前四个参数分别表示四个位置，依次为：右下左上
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#83bff6" },
          { offset: 0.5, color: "#188df0" },
          { offset: 1, color: "#188df0" },
        ]),
      },
      // emphasis: {
      //   itemStyle: {
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //       { offset: 0, color: "#2378f7" },
      //       { offset: 0.7, color: "#2378f7" },
      //       { offset: 1, color: "#83bff6" },
      //     ]),
      //   },
      // },

      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};
export const demo3 = {
  // tooltip: {
  //   trigger: 'item',
  //   formatter: '{a} <br/>{b} : {c} ({d}%)'
  // },
  // legend: {
  //   left: "center",
  //   top: "bottom",
  //   data: [
  //     "rose1",
  //     "rose2",
  //     "rose3",
  //     "rose4",
  //     "rose5",
  //     "rose6",
  //     "rose7",
  //     "rose8",
  //   ],
  // },
  // toolbox: {
  //   show: true,
  //   feature: {
  //     mark: { show: true },
  //     dataView: { show: true, readOnly: false },
  //     restore: { show: true },
  //     saveAsImage: { show: true },
  //   },
  // },
  series: [
    {
      name: "Area Mode",
      type: "pie",
      radius: [20, 90],
      // center: ["75%", "50%"],
      roseType: "area",
      itemStyle: {
        // borderRadius: 5,
      },
      zlevel: 10,
      data: [
        { value: 30, name: "rose 1" },
        { value: 28, name: "rose 2" },
        { value: 26, name: "rose 3" },
        { value: 24, name: "rose 4" },
        // { value: 22, name: "rose 5" },
        // { value: 20, name: "rose 6" },
        // { value: 18, name: "rose 7" },
        // { value: 16, name: "rose 8" },
      ],
    },
    {
      name: "外边框",
      type: "pie",
      tooltip: {
        show: false,
      },
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      // center:['50%','50%'],//这里跟上面那组一样即可
      radius: [80, 80], //这里根据自己的需要自行调整，但是两个值要一样大哦，如果小于上方设置的最小内圆30%则为内阴影，大于外圆60%则为外阴影
      label: {
        normal: {
          show: false, //重点：此处主要是为了不展示data中的value和name
        },
      },
      data: [
        {
          value: 1, //此处的值无所谓是多少
          name: "", //因为不展示label，可不填
          itemStyle: {
            //边框样式，此处我们设置的浅蓝色，颜色可自行修改
            normal: {
              borderWidth: 45, //边框宽度
              borderColor: "rgba(94, 183, 249,  0.13)", //边框颜色
            },
          },
        },
      ],
    },
  ],
};
