<script setup lang="ts">
import { ref, onMounted, toRefs, watch, onUnmounted } from "vue";
import { fromEvent, debounceTime } from "rxjs";
import * as echarts from "echarts/core";
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from "echarts/charts";
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import type { chartBaseOptionsType } from "@/typings/eCharts";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  ToolboxComponent,
]);

/**
 * Props
 * @param chartBaseOptions 基础配置
 */
interface Props {
  chartBaseOptions?: chartBaseOptionsType;
}

const props = withDefaults(defineProps<Props>(), {
  chartBaseOptions: () => {
    return {
      width: "100%",
      height: "100%",
      chartsId: "test",
      setOptionsData: {},
    };
  },
});

const { width, height, chartsId } = toRefs<chartBaseOptionsType>(
  props.chartBaseOptions
);

console.log(props);
console.log(width, height);

// 监听setOptions并更新
watch(
  () => props.chartBaseOptions.setOptionsData,
  (newValue, oldValue) => {
    console.log(newValue);
    initChart();
  },
  { deep: true }
);

// 初始化图表
const charts = ref<any>(null);
const initChart = () => {
  charts.value = echarts.init(
    document.getElementById(chartsId.value) as HTMLElement
  );
  charts.value.setOption(props.chartBaseOptions.setOptionsData);
};
// 监听窗口大小改变事件并动态设置图表的宽高
const onWindowReSize$ = fromEvent(window, "resize")
  .pipe(debounceTime(300))
  .subscribe({
    next: () => {
      console.log("aaa");
      console.log(charts.value);
      charts.value.resize();
    },
  });

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  console.log("echarts组件销毁");
  // 取消订阅浏览器窗口大小改变事件
  onWindowReSize$.unsubscribe();

  // 销毁实例
  charts.value.dispose();
});
</script>

<template>
  <div
    :id="chartsId"
    :style="'width:' + width + ';height:' + height + ';'"
    class="charts"
  ></div>
</template>

<style lang="scss" scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
