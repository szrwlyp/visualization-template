<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import Charts from "@/components/eCharts/index.vue";
import type { chartBaseOptionsType } from "@/typings/eCharts";
import { demo1, demo2, demo3 } from "@/models/eCharts/demo";

const chartBaseOptions = reactive<chartBaseOptionsType>({
  chartsId: "test",
  setOptionsData: demo2,
});
const chartBaseOptions1 = reactive<chartBaseOptionsType>({
  chartsId: "test1",
  setOptionsData: demo1,
});
const chartBaseOptions2 = reactive<chartBaseOptionsType>({
  chartsId: "test2",
  setOptionsData: demo3,
});

onMounted(() => {
  // setTimeout(() => {
  //   demo2.series = [
  //     {
  //       name: "销量1",
  //       type: "bar",
  //       data: [100, 20, 36, 10, 10, 20],
  //     },
  //   ];
  //   // setOptionsData.value = demo2;
  // }, 2000);
});
</script>

<template>
  <main>
    <div class="head">
      <div class="head_title">超创科技大屏可视化系统</div>
      <div class="head_info">
        <div>
          <span>20213-03-30</span> <span>星期四</span>|<span>16:04:32</span>
        </div>
        <div><span>admin</span>|<span>退出</span></div>
      </div>
    </div>
    <div class="left_item">
      <div class="left_item_title">
        <div>内容待定</div>
        <div>更多</div>
      </div>
      <div class="left_item_content">
        <Charts :chartBaseOptions="chartBaseOptions"></Charts>
      </div>
      <div class="left_item_title">
        <div>内容待定</div>
        <div>更多</div>
      </div>
      <div class="left_item_content">
        <Charts :chartBaseOptions="chartBaseOptions2"></Charts>
      </div>
    </div>
    <div class="center_item">
      <div class="data">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <div class="echart">
        <Charts :chartBaseOptions="chartBaseOptions1"></Charts>
      </div>
      <div class="information">
        <!-- <div class="business-style">企业信息</div> -->
      </div>
      <div class="project"></div>
    </div>
    <div class="item_3">
      <div>
        <div>重点企业列表</div>
        <div>更多</div>
      </div>
      <div>3333</div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@use "sass:math";
$desingWidth: 1920;
$designHeight: 1080;

@function vw($px) {
  @return math.div($px, $desingWidth) * 100vw;
}
@function vh($px) {
  @return math.div($px, $designHeight) * 100vh;
}

@mixin item_title {
  background: url(../assets/image/home/title_icon.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 18px;
  align-items: center;
  color: #fff;
  & > div:nth-child(1) {
    font-size: 18px;
    font-weight: 700;
    /* background: linear-gradient(0deg, #c9ffff 0%, #ffffff 100%); */
  }
}

@mixin business_display {
  width: vw(518);
  background: rgba(2, 27, 71, 0.6);
  border: 1px solid #2e50c8;
  box-shadow: 0px 0px 18px 0px rgba(75, 241, 255, 0.32) inset;
  .business-style {
    margin: 11.5px 10.5px 24px 8.5px;
    height: 40px;
    opacity: 0.51;
    background: rgba(98, 132, 255, 0.38);
    color: #ffffff;
  }
}
main {
  width: vw($desingWidth);
  height: vh($designHeight);
  background: url(../assets/image/home/background_icon.png) no-repeat;
  background-size: vw($desingWidth) vh($designHeight);
  display: grid;
  /* background: #000; */
  /* #1b5295,#00daf0 */
  /* 三行四列 */
  grid-template:
    "head head head" vh(100)
    "box1 box2 box3" vh(950);
  grid-row-gap: 10px;
  grid-column-gap: 14px;
  .head {
    grid-area: head;
    height: vh(100);
    width: vw(1920);
    /* background: #0b0d2b; */
    background: url(../assets/image/home/head_icon.png) no-repeat;
    background-size: vw(1920) vh(100);
    .head_title {
      /* background: linear-gradient(0deg, #aad4fe 0%, #ffffff 100%); */
      font-size: clamp(vw(30), vw(34), vw(38));
      font-family: Microsoft YaHei, Microsoft YaHei-Bold;
      font-weight: 700;
      font-style: italic;
      text-align: left;
      color: #2e9aff;
      letter-spacing: 1.7px;
      position: absolute;
      top: vh(15);
      left: vw(762);
      color: #fff;
      /* text-shadow: NaNpx NaNpx 4px NaNpx #031955; */
    }
    .head_info {
      color: #fff;
      display: flex;
      padding: 0 64px;
      justify-content: space-between;
      margin-top: vh(16);
      font-size: vw(15);
      & > div:nth-child(1) {
        width: vw(269);
        display: flex;
        justify-content: space-around;
      }
      & > div:nth-child(2) {
        width: vw(88);
        display: flex;
        justify-content: space-around;
      }
    }
  }
  .left_item {
    grid-area: box1;
    width: vw(401);
    margin-left: vw(18);
    display: grid;
    grid-template-rows: vh(51) vh(408) vh(51) vh(408);
    grid-row-gap: vh(11);
    .left_item_title {
      @include item_title;
    }
    .left_item_content {
      border: 1px solid #2656c3;
      box-shadow: 0px 0px 18px 0px rgba(75, 241, 255, 0.46) inset;
    }
  }
  .center_item {
    grid-area: box2;
    width: vw(1054);
    display: grid;
    grid-template:
      "c1 c1" vh(80)
      "c2 c2" vh(510)
      "c3 c4" vh(327);
    grid-row-gap: vh(16.5);

    .data {
      grid-area: c1;
      display: flex;
      justify-content: space-between;
      & > div {
        width: vw(200);
        height: vh(80);
        background: rgba(5, 40, 97, 0.51);
        box-shadow: 0px 0px 6px 0px rgba(75, 241, 255, 0.46) inset;
      }
    }
    .echart {
      grid-area: c2;
      background: rgba(2, 27, 71, 0.6);
      border: 1px solid #2e50c8;
      box-shadow: 0px 0px 30px 0px rgba(75, 241, 255, 0.46) inset;
    }
    .information {
      grid-area: c3;

      margin-right: vw(18);
      @include business_display;
    }
    .project {
      grid-area: c4;
      @include business_display;
    }
  }
  .item_3 {
    grid-area: box3;
    margin-right: vw(18);
    width: vw(401);
    display: grid;
    grid-template-rows: vh(51) 1fr;
    grid-row-gap: vh(11);
    & > div:nth-child(1) {
      @include item_title;
    }
    & > div:nth-child(2) {
      background: rgba(2, 27, 71, 0.6);
      border: 1px solid #2656c3;
      box-shadow: 0px 0px 18px 0px rgba(75, 241, 255, 0.32) inset;
    }
    /* height: 606px; */
  }
}
</style>
