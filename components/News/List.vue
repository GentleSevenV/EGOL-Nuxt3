<template>
  <div class="news-list">
    <div class="news-list-con">
      <template v-for="item in newsList?.data.list" :key="item.id">
        <div class="news-item">
          <NuxtLink :to="`/news/${item.category}/${item.id}.html`">
            <img :src="item.coverImage" />
            <h4>{{ item.title }}</h4>
            <span>{{ item.createTime }}</span>
            <p>{{ item.description }}</p>
            <div class="readmore">
              <Icon class="icon-play" name="icons:play" />
              阅读更多
            </div>
          </NuxtLink>
        </div>
      </template>
    </div>
    <div class="pagination">
      <ClientOnly fallback-tag="span" fallback="分页加载中...">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[2, 4, 6]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNews"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface INewsType {
  id: number;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  createTime: string;
}

// 1.获取当前路由中的category和currentPage参数，用于发送网络请求获取当前页面的news数据
const route = useRoute();
const category = ref(route.params.category);
const currentPage = ref(route.query.page ? Number(route.query.page) : 1);
const pageSize = ref(6);
const totalNews = ref(0);

// 2.根据category和currentPage值来获取对应分类的news数据，并且监听currentPage这个ref对象(注意：currentPage是响应式对象数据，而currenPage.value仅仅是一个不具有响应式的正常的数据值，此处的page一定要绑定currentPage这个ref对象，而不是currentPage.value，因为nuxt3中的useFetch这个api，当携带的参数中包含响应式对象时，那么它内部会自动监听这个响应对象，如果这个响应式对象内部的值发生改变时，会自动重新发起请求，来获取最新的数据)；
// 2.1 那么当我们点击el-pagination这个分页组件进行切换分页时，下面的 handleCurrentChange函数中会修改currentPage.value的值，那么currentPage这个响应式对象发生了改变，那么就会自动触发这个网络请求来获取最新一页的数据；
// 2.2 而且当我们点击浏览器上的后退按钮时，浏览器地址栏中的page参数发生变化，由于下面我们使用了watch监听了路由中的page参数(也就是route.query.page)，当page参数发生变化时，我们将最新的page参数值再赋值给currentPage.value，那么此时currentPage这个响应式对象发生了改变，那么也会自动触发这个网络请求来获取当前页的数据；
const { data: newsList } = await useFetch<DataResponsePage<INewsType[]>>(
  "/open/news/info/page",
  {
    method: "post",
    body: {
      category: category,
      status: 1,
      page: currentPage,
      size: pageSize,
    },
  }
);

totalNews.value = newsList.value?.data.pagination.total as number;

// 3.当我们点击el-pagination这个分页组件进行切换展示条目数量pageSize时，我们只需要将最新的pageSize值赋值给pageSize.value，那么pageSize这个响应式对象发生了改变，而useFetch会监听pageSize这个响应式对象，那么就会自动触发上面的useFetch网络请求来获取最新的数据和展示最新的条目数量；
const handleSizeChange = async (val: number) => {
  pageSize.value = val;
};

// 4.当我们点击el-pagination这个分页组件进行切换分页时，使用navigationTo导航到当前分类页下并修改page参数，而currentPage会通过route.query.page获取到最新的值，那么currentPage这个响应式对象发生了改变，而useFetch会监听currentPage这个响应式对象，那么就会自动触发上面的useFetch网络请求来获取最新一页的数据；
const handleCurrentChange = async (val: number) => {
  await navigateTo({
    path: `/news/${route.params.category}.html`,
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
.news-list {
  width: 770px;

  .news-list-con {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    .news-item {
      width: 369px;
      margin-bottom: 60px;

      img {
        width: 100%;
      }

      h4 {
        font-size: 22px;
        color: #333;
        line-height: 30px;
        height: 60px;
        margin-top: 15px;
        text-align: justify;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2; /* 显示的最大行数 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        font-size: 14px;
        color: #999;
        display: block;
        margin: 8px 0;
      }

      p {
        font-size: 16px;
        color: #333;
        height: 50px;
        text-align: justify;
        line-height: 25px;
        letter-spacing: 1px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2; /* 显示的最大行数 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .readmore {
        width: 100px;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #272727;
        padding: 0px 10px;
        border: 1px solid #e4e4e4;
        margin-top: 10px;

        .icon-play {
          margin-right: 6px;
          font-size: 16px;
          color: var(--theme-color);
        }
      }
    }
  }

  .pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
