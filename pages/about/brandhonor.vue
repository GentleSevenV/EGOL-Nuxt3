<template>
  <div class="brandhonor">
    <AboutHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item" to="/about/brandintro.html">品牌介绍</NuxtLink>
      <NuxtLink class="nav-item active" to="/about/brandhonor.html"
        >所获荣誉</NuxtLink
      >
      <NuxtLink class="nav-item" to="/about/brandprogress.html"
        >发展历程</NuxtLink
      >
      <NuxtLink class="nav-item" to="/about/shops.html">门店形象</NuxtLink>
    </div>
    <div class="container">
      <div class="page-title">
        <h2>荣誉证书</h2>
        <p>行业与消费者双重认可</p>
        <i></i>
      </div>

      <div class="honor-list">
        <template v-for="item in honorsList?.data.list" :key="item.id">
          <div>
            <img :src="item.image" />
            <p>
              {{ item.name }}<i></i><span>颁发时间：{{ item.issueDate }}</span>
            </p>
          </div>
        </template>
      </div>

      <div class="pagination">
        <ClientOnly fallback-tag="span" fallback="分页加载中...">
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[3, 6, 9]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalHonors"
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
  title:
    "易高整家定制(EGOL全屋定制)荣誉：衣柜十大品牌，衣柜十环认证，2024全屋定制消费者喜爱十大品牌",
  meta: [
    {
      name: "description",
      content:
        "易高整家定制先后在2012-2025年间，获得中国衣柜十大匹配，衣柜十环认证，2024全屋定制消费者喜爱十大品牌等诸多荣誉，奠定了易高整家定制在业内的领导者地位。",
    },
    {
      name: "keywords",
      content: "易高整家定制,衣柜十大品牌，衣柜十环认证，衣柜品牌联盟主席单位",
    },
  ],
});

interface IHonor {
  id: number;
  name: string;
  image: string;
  issueDate: string;
}

// 1.获取当前路由中的currentPage参数，用于发送网络请求获取当前页面的news数据
const route = useRoute();
const currentPage = ref(route.query.page ? Number(route.query.page) : 1);
const pageSize = ref(9);
const totalHonors = ref(0);

// // 2.根据currentPage值来获取对应分类的news数据，并且监听currentPage这个ref对象(注意：currentPage是响应式对象数据，而currenPage.value仅仅是一个不具有响应式的正常的数据值，此处的page一定要绑定currentPage这个ref对象，而不是currentPage.value，因为nuxt3中的useFetch这个api，当携带的参数中包含响应式对象时，那么它内部会自动监听这个响应对象，如果这个响应式对象内部的值发生改变时，会自动重新发起请求，来获取最新的数据)，pageSize同理；
// 2.1 那么当我们点击el-pagination这个分页组件进行切换分页时，下面的 handleCurrentChange函数中会修改currentPage.value的值，那么currentPage这个响应式对象发生了改变，那么就会自动触发这个网络请求来获取最新一页的数据；
// 2.2 而且当我们点击浏览器上的后退按钮时，浏览器地址栏中的page参数发生变化，由于下面我们使用了watch监听了路由中的page参数(也就是route.query.page)，当page参数发生变化时，我们将最新的page参数值再赋值给currentPage.value，那么此时currentPage这个响应式对象发生了改变，那么也会自动触发这个网络请求来获取当前页的数据；
const { data: honorsList } = await useFetch<DataResponsePage<IHonor[]>>(
  "/open/honor/info/page",
  {
    method: "post",
    body: {
      page: currentPage,
      size: pageSize,
      status: 1,
    },
  }
);

if (honorsList.value == null) {
  console.log("未查询到荣誉！");
} else {
  totalHonors.value = honorsList.value.data.pagination.total;
}

// 3.当我们点击el-pagination这个分页组件进行切换展示条目数量pageSize时，我们只需要将最新的pageSize值赋值给pageSize.value，那么pageSize这个响应式对象发生了改变，而useFetch会监听pageSize这个响应式对象，那么就会自动触发上面的useFetch网络请求来获取最新的数据和展示最新的条目数量；
const handleSizeChange = (val: number) => {
  pageSize.value = val;
};

// 4.当我们点击el-pagination这个分页组件进行切换分页时，使用navigationTo导航到当前分类页下并修改page参数，而currentPage会通过route.query.page获取到最新的值，那么currentPage这个响应式对象发生了改变，而useFetch会监听currentPage这个响应式对象，那么就会自动触发上面的useFetch网络请求来获取最新一页的数据；
const handleCurrentChange = async (val: number) => {
  await navigateTo({
    path: `/about/brandhonor.html`,
    query: {
      page: val,
    },
  });
  if (import.meta.client) {
    window.scrollTo(0, 0);
  }
};

// 5.当我们点击浏览器上的后退按钮时，如果我们也想展示后退之后页面的数据时，我们只能通过watch去监听浏览器地址栏中的page参数(也就是route.query.page这个值)，当page参数发生变化，watch会监听到2个值，一个是新的route.query.page值，一个是旧的route.query.page值，那么我们需要将新的page参数值赋值给currentPage.value，那么此时currentPage这个响应式对象发生了改变，那么也就会自动触发上面的useFetch网络请求来获取后退之后这一页的最新数据；
watch(
  () => route.query.page,
  (newVal, oldVal) => {
    if (Number(newVal) > 1) {
      currentPage.value = Number(newVal);
    } else {
      currentPage.value = 1;
    }
  }
);
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

  .honor-list {
    width: 1200px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(3, 360px); /* 每行3个，每个宽度为380px */
    justify-content: space-between; /* 子元素之间的间距自适应 */

    div {
      width: 360px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 20px;
      margin-bottom: 30px;
      border-bottom: 2px solid #f9c152;

      img {
        width: 100%;
        display: block;
      }

      p {
        font-size: 16px;
        color: #333;
        text-align: center;
        margin-top: 15px;

        i {
          width: 50px;
          margin: 10px auto 15px;
          display: block;
          border-top: 1px solid #f9c152;
        }
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
