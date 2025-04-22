<template>
  <div class="news">
    <NewsHeader></NewsHeader>
    <el-tabs
      v-model="activeName"
      type="card"
      class="news-tabs"
      @tab-click="handleClick"
    >
      <template v-for="item in newsTabs" :key="item.id">
        <el-tab-pane :label="item.label" :name="item.name"> </el-tab-pane>
      </template>
    </el-tabs>
    <div class="news-con">
      <NewsList></NewsList>
      <NewsLatest />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "易高整家定制新闻动态、团购、开业及活动-EGOL全屋定制资讯频道",
  meta: [
    {
      name: "description",
      content:
        "易高整家定制（EGOL全屋定制）资讯频道-第一时间更新易高定制家居团购活动、最新产品发布、专卖店开业资讯、相关媒体对易高定制家居公司报道以及公司内部相关活动！",
    },
    {
      name: "keywords",
      content: "易高定制家居新闻、EGOL全屋定制活动",
    },
  ],
});
import type { TabsPaneContext } from "element-plus";
const route = useRoute();
const router = useRouter();

const newsTabs = reactive([
  { id: 1, label: "品牌资讯", name: "brandnews" },
  { id: 2, label: "行业资讯", name: "industrynews" },
  { id: 3, label: "精彩活动", name: "activitynews" },
]);

// 1.根据路由中的category参数赋值给el-tabs的activeName属性，绑定选项卡的name，以便知道当前切换在哪个新闻分类下
const category = route.params.category;
const activeName = ref<string | number>(
  Array.isArray(category) ? category[0] : category
);

// 2.el-tabs点击事件：获取当前点击tab的对象，修改绑定的activeName值，并且修改地址栏路径
const handleClick = (tab: TabsPaneContext) => {
  if (tab.props.name) {
    activeName.value = tab.props.name;
    router.push(`/news/${tab.props.name}.html`);
  }
};
</script>
<style lang="less" scoped>
.news {
  .news-tabs {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    bottom: 35px;
  }

  .news-con {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0 80px;
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
  }
}

:deep(.el-tabs--card > .el-tabs__header) {
  background-color: #fff;
  box-shadow: 0px 10px 13px -8px #e1e1e1;
  border-bottom: none;
  height: 60px;
}

:deep(.el-tabs--card > .el-tabs__header .el-tabs__nav) {
  border: none;
  width: 1200px;
  justify-content: space-between;
}

:deep(.el-tabs__item) {
  width: 400px;
  font-size: 16px;
}
</style>
