<template>
  <div class="equipments">
    <FreeHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item" to="/powershow/equipments.html">
        设备展示
      </NuxtLink>
      <NuxtLink class="nav-item" to="/powershow/staff.html">
        员工风采
      </NuxtLink>
      <NuxtLink class="nav-item active" to="/powershow/environment.html">
        公司环境
      </NuxtLink>
    </div>
    <div class="waterfall-container">
      <div v-for="item in envPicList" :key="item.id" class="waterfall-item">
        <img :src="item.image" :alt="item.title" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "公司环境",
  meta: [
    {
      name: "description",
      content:
        "易高整家定制，国内超大型专注于高端全屋定制家具加盟代理及其配套产品研发、生产及销售的全屋定制家具加盟代理十大品牌厂家。易高整家定制涵盖家装目录所有软装定制产品，为全屋定制家具加盟代理服务解决方案5A级供应商。",
    },
    {
      name: "keywords",
      content: "全屋定制|易高定制家具|整家定制|定制家具|定制家具十大品牌",
    },
  ],
});
interface IPowershow {
  id: number;
  title: string;
  image: string;
}

const envPicList = ref<IPowershow[] | undefined>([]);

// 获取默认列表数据
const { data } = await useFetch<DataResponse<IPowershow[]>>(
  "/open/powershow/info/list",
  {
    method: "post",
    body: {
      category: 3,
      status: 1,
    },
  }
);

envPicList.value = data.value?.data;
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
    width: 400px;
    text-align: center;
    color: #333;
    font-size: 16px;
    line-height: 16px;
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

.waterfall-container {
  width: 1200px;
  margin: 0 auto;
  padding: 38px 0 80px;
  column-count: 4; /* 列数 */
  column-gap: 16px;

  .waterfall-item {
    break-inside: avoid; /* 防止内容被分割 */
    margin-bottom: 16px;
    padding: 12px;
    background: #fff;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      display: block;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
    }
  }
}
</style>
