<template>
  <div class="container">
    <Banner :banners="banners" />
    <div>首页</div>
    <el-button @click="ElMessage('hello')">button</el-button>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>

<script lang="ts" setup>
interface IBannerType {
  id: number;
  title: string;
  link: string;
  pcImage: string;
}

const banners = ref<IBannerType[]>([]);

const { data } = await PostApi("/open/banner/info/list", {
  body: {
    status: 1,
    type: 0,
  },
});

banners.value = data;
</script>
<style lang="less" scoped>
.container {
  position: relative;
}
</style>
