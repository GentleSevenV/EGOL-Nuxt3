<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide v-for="item in props.banners" :key="item.id">
        <img class="swiper-img" :src="item.pcImage" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script lang="ts" setup>
interface IBannerType {
  id: number;
  title: string;
  link: string;
  pcImage: string;
}
const props = defineProps({
  banners: {
    type: Array<IBannerType>,
    required: true,
    default: null,
  },
});

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  speed: 1600,
  autoplay: {
    delay: 4000,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: true,
});
</script>
<style lang="less" scoped>
.swiper-img {
  width: 100%;
  display: block;
}

swiper-container::part(bullet-active) {
  background-color: var(--theme-color);
}
</style>
