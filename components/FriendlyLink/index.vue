<template>
  <div class="links-box">
    <template v-for="item in friendlyLinks?.data" :key="item.id">
      <a class="links" target="_blank" :href="item.link">{{ item.name }}</a>
    </template>
  </div>
</template>

<script lang="ts" setup>
interface ILink {
  id: number;
  name: string;
  link: string;
}

const { data: friendlyLinks } = await useFetch<DataResponse<ILink[]>>("/open/friendly/info/list", {
  method: "post",
});
</script>
<style lang="less" scoped>
.links-box {
  display: flex;
  flex-wrap: wrap;

  .links {
    padding: 5px 10px;
    display: block;
    font-size: 12px;
    color: #727272;
    height: 25px;
    line-height: 25px;
  }
}
</style>
