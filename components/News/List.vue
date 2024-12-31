<template>
  <div class="news-list">
    <div class="news-list-con">
      <template v-for="item in newslist" :key="item.id">
        <div class="news-item">
          <NuxtLink :to="`/news/${item.category}/${item.id}`">
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

// 1.获取el-tabs点击tab标签传递过来的activeName值
const props = defineProps({
  activeName: [Number, String],
});

const currentPage = ref(1);
const pageSize = ref(6);
const totalNews = ref(0);

const newslist = ref<INewsType[] | undefined>([]);

// 2.根据传递过来的activeName值来获取对应分类的news数据
const { data } = await useFetch<DataResponsePage<INewsType[]>>("/open/news/info/page", {
  method: "post",
  body: {
    category: props.activeName,
    status: 1,
    page: currentPage.value,
    size: pageSize.value,
  },
});

newslist.value = data.value?.data.list;
totalNews.value = data.value?.data.pagination.total as number;

const handleSizeChange = async (val: number) => {
  const { data } = await $fetch<DataResponsePage<INewsType[]>>("/open/news/info/page", {
    method: "post",
    body: {
      category: props.activeName,
      status: 1,
      page: currentPage.value,
      size: pageSize.value,
    },
  });
  newslist.value = data.list;
};

const handleCurrentChange = async (val: number) => {
  const { data } = await $fetch<DataResponsePage<INewsType[]>>("/open/news/info/page", {
    method: "post",
    body: {
      category: props.activeName,
      status: 1,
      page: currentPage.value,
      size: pageSize.value,
    },
  });
  newslist.value = data.list;
};
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
