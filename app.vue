<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  // 作为字符串，
  // 其中`%s`会被其他页面中设置的标题替换，例如：首页 - 易高整家定制官网[EGOL]_专业环保定制，整家一体交付
  titleTemplate: "%s - 易高整家定制官网[EGOL]_专业环保定制，整家一体交付",
});
</script>

<style lang="css">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
