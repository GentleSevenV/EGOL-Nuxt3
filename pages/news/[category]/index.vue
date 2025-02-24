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
      <!-- <el-tab-pane label="品牌资讯" name="brandnews">
        <NewsList></NewsList>
      </el-tab-pane>
      <el-tab-pane label="行业资讯" name="industrynews">
        <NewsList></NewsList>
      </el-tab-pane>
      <el-tab-pane label="精彩活动" name="activitynews">
        <NewsList></NewsList>
      </el-tab-pane> -->
    </el-tabs>
    <div class="news-con">
      <NewsList :activeName="activeName"></NewsList>
      <NewsLatest />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from "element-plus";
const route = useRoute();
const router = useRouter();

const newsTabs = reactive([
  { id: 1, label: "品牌资讯", name: "brandnews" },
  { id: 2, label: "行业资讯", name: "industrynews" },
  { id: 3, label: "精彩活动", name: "activitynews" },
]);

// 根据路由中的category参数进行数据请求
const category = route.params.category;
const activeName = ref<string | number>(
  Array.isArray(category) ? category[0] : category
);

// 通过useState获取主导航中定义的全局状态
// const activeNav = useState("menu");

const handleClick = (tab: TabsPaneContext) => {
  if (tab.paneName) {
    activeName.value = tab.paneName;
    // 当点击此页面中的二级导航的同时也要进行对主导航状态的修改，以达到联动效果
    // activeNav.value = `/news/${tab.paneName}`;
    router.push(`/news/${tab.paneName}`);
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
