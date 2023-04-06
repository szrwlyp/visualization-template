<script setup lang="ts">
import { toRefs } from "vue";

interface SwiperProps {
  swiperOptions: any;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<SwiperProps>(), {
  swiperOptions: {},
  width: "1200px",
  height: "300px",
});
const { swiperOptions } = toRefs(props);

const onSwiper = () => {
  console.log("aaa");
};

const onSlideChange = () => {
  console.log("aaa");
};
</script>

<template>
  <swiper
    :style="'width:' + width + ';height:' + height + ';'"
    :options="swiperOptions"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <slot></slot>
    <!-- <swiper-slide
      ><img class="img" src="./images/certify01.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="img" src="./images/certify02.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="img" src="./images/certify03.png" alt=""
    /></swiper-slide> -->
    <!-- <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<style lang="scss" scoped></style>
