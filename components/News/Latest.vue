<template>
  <div class="related-news">
    <div class="latest-news">
      <h4>最新资讯</h4>

      <template v-for="item in latestnews?.data.list" :key="item.id">
        <NuxtLink :to="`/news/${item.category}/${item.id}`">
          <div class="latest-item">
            <div class="news-pic">
              <img :src="item.coverImage" />
            </div>
            <div>
              <p class="news-title">{{ item.title }}</p>
              <span class="news-time">{{ item.createTime }}</span>
            </div>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

// 根据路由中的category参数进行数据请求
const category = route.params.category;

interface INewsType {
  id: number;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  createTime: string;
}

const { data: latestnews } = await useFetch<DataResponsePage<INewsType[]>>("/open/news/info/page", {
  method: "post",
  body: {
    category: category,
    status: 1,
    page: 1,
    size: 8,
  },
});
</script>
<style lang="less" scoped>
.related-news {
  width: 290px;

  h4 {
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 5px;
  }

  .latest-news {
    width: 100%;
    .latest-item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid #e1e1e1;

      .news-pic {
        margin-right: 15px;

        img {
          width: 88px;
          display: block;
        }
      }

      .news-title {
        font-size: 14px;
        color: #333;
        text-align: justify;
        letter-spacing: 1px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2; /* 显示的最大行数 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .news-time {
        color: #999;
        display: block;
        margin-top: 12px;
      }
    }
  }
}
</style>
