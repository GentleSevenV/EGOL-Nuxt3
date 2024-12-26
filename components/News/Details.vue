<template>
  <div class="news-details">
    <h2 class="news-title">{{ newslist?.data.title }}</h2>
    <span class="news-time">发布时间：{{ newslist?.data.createTime }}</span>
    <div class="news-content" v-html="newslist?.data.content"></div>
  </div>
</template>

<script lang="ts" setup>
interface INewsType {
  id: number;
  title: string;
  category: string;
  content: string;
  description: string;
  coverImage: string;
  createTime: string;
}

const route = useRoute();
const newsId = route.params.id;

// 注意：这里网络请求返回的是一个INewsType对象而不是一个INewsType数组
const { data: newslist } = await useFetch<DataResponse<INewsType>>(
  `/open/news/info/info?id=${newsId}`,
  {
    method: "get",
  }
);

// console.log(newslist.value);
</script>

<style lang="less" scoped>
.news-details {
  width: 770px;

  .news-title {
    font-size: 26px;
    color: #333;
    letter-spacing: 1px;
    text-align: center;
  }

  .news-time {
    font-size: 14px;
    color: #999;
    padding: 20px 0;
    display: block;
    text-align: center;
  }

  .news-content {
    font-size: 14px;
    line-height: 1.75em;
    color: #666;
    letter-spacing: 1px;
    margin-bottom: 50px;

    // 修改v-html内插入的内容元素需使用 :deep()
    :deep(p) {
      text-indent: 2em;

      span {
        font-size: 12px;
        text-align: center;
        display: block;
      }

      img {
        margin: 15px auto;
        display: block;
      }
    }
  }
}
</style>
