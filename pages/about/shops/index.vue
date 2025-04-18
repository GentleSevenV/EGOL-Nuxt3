<template>
  <div class="shops">
    <AboutHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item" to="/about/brandintro.html">品牌介绍</NuxtLink>
      <NuxtLink class="nav-item" to="/about/brandhonor.html">所获荣誉</NuxtLink>
      <NuxtLink class="nav-item" to="/about/brandprogress.html"
        >发展历程</NuxtLink
      >
      <NuxtLink class="nav-item active" to="/about/shops.html"
        >专卖形象</NuxtLink
      >
    </div>
    <div class="container">
      <div class="page-title">
        <h2>易高整家定制全国专卖形象</h2>
        <p>易高在全国各地有1000多家加盟商</p>
        <i></i>
      </div>

      <div class="shops-list">
        <template v-for="item in shopsList" :key="item.id">
          <NuxtLink class="item" :to="`/about/shops/${item.id}.html`">
            <div>
              <img :src="item.image" />
              <p>
                {{ item.name }}
              </p>
            </div>
          </NuxtLink>
        </template>
      </div>

      <div class="pagination">
        <ClientOnly fallback-tag="span" fallback="分页加载中...">
          <el-pagination
            v-model:current-page="pageData.page"
            v-model:page-size="pageData.size"
            :page-sizes="[3, 6, 9]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "易高整家定制(EGOL全屋定制)全国专卖店形象展示",
  meta: [
    {
      name: "description",
      content:
        "易高整家定制全国专卖店形象展示页面，主要包括易高定制家居在全国各地的专卖店形象，为一部分展示，主要体现易高定制家居品牌形象的统一性，唯一性及官方性质！",
    },
    {
      name: "keywords",
      content: "易高整家定制(EGOL全屋定制)全国专卖店形象展示",
    },
  ],
});

interface IShops {
  id: number;
  name: string;
  image: string;
}

const shopsList = ref<IShops[] | undefined>([]);
const total = ref<number | undefined>(0);

// 设置默认分页请求参数
interface IPage {
  page: number;
  size: number;
  status: number;
}
const pageData = reactive<IPage>({
  page: 1, // 页面是从1开始的,设置默认值为1
  size: 9,
  status: 1,
});

// 获取默认列表数据
const { data } = await useFetch<DataResponsePage<IShops[]>>(
  "/open/shops/info/page",
  {
    method: "post",
    body: pageData,
  }
);

if (data.value == null) {
  console.log("荣誉为空！");
} else {
  // console.log(data.value);
  shopsList.value = data.value.data.list;
  total.value = data.value.data.pagination.total;
}

const getShopsList = async (newPageData: IPage) => {
  const data = await $fetch<DataResponsePage<IShops[]>>(
    "/open/shops/info/page",
    {
      method: "post",
      body: newPageData,
    }
  );
  // console.log(data);
  return data.data;
};

const handleSizeChange = (val: number) => {
  pageData.size = val;
  getShopsList(pageData).then((res) => {
    shopsList.value = res.list;
    total.value = res.pagination.total;
  });
};
const handleCurrentChange = (val: number) => {
  pageData.page = val;
  getShopsList(pageData).then((res) => {
    shopsList.value = res.list;
    total.value = res.pagination.total;
  });
};
</script>

<style lang="less" scoped>
.second-nav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: -30px;
  background-color: #fff;
  box-shadow: 0px 10px 13px -8px #e1e1e1;
  border-bottom: none;
  height: 60px;

  .nav-item {
    width: 300px;
    text-align: center;
    color: #333;
    font-size: 16px;
    border-right: 1px solid #d8d8d8;
    box-sizing: border-box;

    &:nth-last-of-type(1) {
      border: none;
    }
  }

  .active {
    color: var(--theme-color);
  }
}

.container {
  width: 100%;
  background: url(/images/honor_bg.jpg) top center no-repeat;
  background-size: 100% 100%;
  padding: 80px 0;

  .page-title {
    h2 {
      font-size: 32px;
      color: #333;
      text-align: center;
      letter-spacing: 2px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      color: #676767;
      text-align: center;
    }

    i {
      display: block;
      width: 100px;
      height: 15px;
      margin: 0 auto;
      border-bottom: 1px solid var(--theme-color);
    }
  }

  .shops-list {
    width: 1200px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(3, 380px); /* 每行3个，每个宽度为380px */
    gap: 20px; /* 固定间距 */
    justify-content: space-between; /* 子元素之间的间距自适应 */

    div {
      width: 360px;
      background-color: #fff;
      box-sizing: border-box;
      margin-bottom: 30px;
      border-bottom: 2px solid #f9c152;
      cursor: pointer;

      img {
        width: 100%;
        display: block;
      }

      p {
        font-size: 16px;
        color: #333;
        text-align: center;
        margin-top: 15px;
        padding-bottom: 15px;
      }
    }
  }

  .pagination {
    width: 1200px;
    margin: 60px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
