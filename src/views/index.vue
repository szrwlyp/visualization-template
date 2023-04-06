<script setup lang="ts">
import swiperComp from "@/components/swiperComp/index.vue";
const swiperOption = {
  autoplay: true,
  slidesPerView: 3,
  lazy: {
    loadPrevNext: true,
  },
  direction: "horizontal", // 水平切换选项
  loop: true, // 循环模式选项
  //切换效果   3d流
  effect: "coverflow",
  //为true默认居中 默认居左
  centeredSlides: true,
  coverflowEffect: {
    //3d旋转角度
    rotate: 0,
    //每个slide之间的拉伸，越大靠的越紧
    stretch: 30,
    //深度值，越大距离越远，看起来越小
    depth: 80,
    //值越大，效果越明显
    modifier: 3,
    //是否开启阴影
    slideShadows: false,
  },
};
</script>

<template>
  <div>
    <swiperComp :swiperOptions="swiperOption">
      <swiper-slide
        ><img
          class="img"
          src="../components/swiperComp/images/certify01.png"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="../components/swiperComp/images/certify02.png"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="../components/swiperComp/images/certify03.png"
          alt="" /></swiper-slide
    ></swiperComp>
  </div>
</template>

<style lang="scss" scoped></style>
