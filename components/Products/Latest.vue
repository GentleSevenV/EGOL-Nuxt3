<template>
  <div class="products-latest">
    <h2>最新产品</h2>
    <p>易高整家定制最新产品</p>
    <i>&nbsp;</i>
    <div class="products-list">
      <template v-for="item in productsLatests" :key="item.id">
        <NuxtLink class="item" :to="`/products/${item.id}.html`">
          <h3>{{ item.name }}</h3>
          <i></i>
          <img :src="item.coverImage" />
          <div>
            <p>包含：{{ item.includes }}</p>
            <div class="readmore">
              <Icon class="icon-play" name="icons:play" />
              了解更多
            </div>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProductsList {
  id: number;
  name: string;
  coverImage: string;
  includes: string;
}

const productsLatests = ref<IProductsList[] | undefined>([]);

// 获取默认产品列表数据
const { data } = await useFetch<DataResponsePage<IProductsList[]>>(
  "/open/products/info/page",
  {
    method: "post",
    body: {
      page: 1,
      size: 3,
      status: 1,
    },
  }
);

// console.log(productsLatests.value);

productsLatests.value = data.value?.data.list;
</script>

<style lang="less" scoped>
.products-latest {
  width: 1200px;
  margin: 80px auto;

  & > h2 {
    font-size: 32px;
    color: #333;
    text-align: center;
    letter-spacing: 2px;
  }

  & > p {
    font-size: 18px;
    color: #676767;
    text-align: center;
    margin-top: 15px;
  }

  & > i {
    width: 100px;
    margin: 20px auto 0;
    display: block;
    border-top: 1px solid #f9c152;
  }
  .products-list {
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 380px); /* 每行3个，每个宽度为380px */
    gap: 30px; /* 固定间距 */
    justify-content: space-between; /* 子元素之间的间距自适应 */

    .item {
      width: 380px;
      color: #333;
      margin-bottom: 30px;

      h3 {
        font-size: 18px;
      }

      i {
        width: 18px;
        height: 10px;
        border-bottom: 2px solid var(--theme-color);
        display: block;
        margin-bottom: 20px;
      }

      img {
        width: 100%;
        display: block;
      }

      div {
        padding: 25px;
        font-size: 14px;
        color: #939393;
        background-color: #fff;
        -webkit-box-shadow: 0px 2px 13px #ececec;
        box-shadow: 0px 0px 10px #ececec;

        p {
          color: #939393;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .readmore {
          width: 120px;
          display: flex;
          align-content: center;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #272727;
          padding: 8px 0;
          border: 1px solid #e4e4e4;
          margin-top: 10px;
          box-shadow: none;

          .icon-play {
            margin-right: 6px;
            font-size: 16px;
            color: var(--theme-color);
          }
        }
      }
    }
  }
}
</style>
