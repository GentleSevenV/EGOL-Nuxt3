<template>
  <div class="news">
    <NewsHeader></NewsHeader>
    <el-tabs v-model="activeName" type="card" class="news-tabs" @tab-click="handleClick">
      <el-tab-pane label="品牌资讯" name="brandnews">
        <div class="news-con">
          <div class="news-list">
            <div>{{ $route.params.category }}--{{ $route.params.id }}</div>
            <div class="pagination"></div>
          </div>
          <NewsLatest />
        </div>
      </el-tab-pane>
      <el-tab-pane label="行业资讯" name="industrynews">
        <div class="news-con">
          <div class="news-list">
            <div>{{ $route.params.category }}--{{ $route.params.id }}</div>
            <div class="pagination"></div>
          </div>
          <NewsLatest />
        </div>
      </el-tab-pane>
      <el-tab-pane label="精彩活动" name="activitynews">
        <div class="news-con">
          <div class="news-list">
            <div>{{ $route.params.category }}--{{ $route.params.id }}</div>
            <div class="pagination"></div>
          </div>
          <NewsLatest />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from "element-plus";
const route = useRoute();
const router = useRouter();
const activeName = ref<string | number>(
  Array.isArray(route.params.category) ? route.params.category[0] : route.params.category
);

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

// 通过useState获取主导航中定义的全局状态
const activeNav = useState("menu");
// activeNav.value = `/news/${category}`;
// console.log(activeNav.value);

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

      .news-list {
        width: 770px;
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

        .pagination {
          width: 100%;
          display: flex;
          align-content: center;
          align-items: center;
          justify-content: center;
        }
      }
    }
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
