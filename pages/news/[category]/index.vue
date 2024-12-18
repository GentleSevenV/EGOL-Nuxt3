<template>
  <div class="news-list">
    <NewsHeader></NewsHeader>
    <el-tabs v-model="activeName" type="card" class="news-tabs" @tab-click="handleClick">
      <el-tab-pane label="品牌资讯" name="brandnews">品牌资讯</el-tab-pane>
      <el-tab-pane label="行业资讯" name="industrynews">行业资讯</el-tab-pane>
      <el-tab-pane label="精彩活动" name="activitynews">精彩活动</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from "element-plus";
import { isArray } from "element-plus/es/utils/types.mjs";
const route = useRoute();
const router = useRouter();
const activeName = ref<string | number>(
  isArray(route.params.category) ? route.params.category[0] : route.params.category
);

const handleClick = (tab: TabsPaneContext) => {
  if (tab.paneName) {

    activeName.value = tab.paneName;
    useState("menu").value = `/news/${tab.paneName}`;
    router.push(`/news/${tab.paneName}`);
  }
};

</script>
<style lang="less" scoped>
.news-list {
  position: relative;

  .news-tabs {
    width: 1200px;
    margin: 0 auto;
  }
}

:deep(.el-tabs--card > .el-tabs__header) {
  position: relative;
  bottom: 35px;
  background-color: #fff;
  box-shadow: 0px 16px 18px -4px #e1e1e1;
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
