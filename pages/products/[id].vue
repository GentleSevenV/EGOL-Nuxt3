<template>
  <div>{{ route.params.id }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);
</script>
<style lang="less" scoped></style>
