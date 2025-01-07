<template>
  <div class="products">
    <div class="header">
      <img src="/public/images/qudz_banner.jpg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const productId = route.params.id;

interface IProductsInfo {
  id: number;
  name: string;
  description: string;
  colors: string;
  coverImage: string;
  displayImages: string[];
  includes: string;
  labels: string[];
  materials: string[];
}

const { data: productInfo } = await useFetch<DataResponse<IProductsInfo>>(
  `/open/products/info/info?id=${productId}`,
  {
    method: "get",
  }
);

console.log(productInfo);
</script>
<style lang="less" scoped>
.products {
  width: 100%;

  .header {
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
