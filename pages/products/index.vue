<template>
  <div class="products">
    <div class="header">
      <img src="/images/qudz_banner.jpg" />
    </div>
    <div class="container">
      <div class="page-title">
        <h2>选择我们的定制产品</h2>
        <p>通过筛选器找到你所需要的</p>
        <i></i>
      </div>
      <div class="filter">
        <div class="filter-item">
          <h3>类型</h3>
          <el-radio-group @change="categoryChange" v-model="category">
            <el-radio border :value="0">全部</el-radio>
            <template v-for="item in filterDict?.data.category">
              <el-radio border :value="item.value">{{ item.name }}</el-radio>
            </template>
          </el-radio-group>
        </div>
        <div class="filter-item">
          <h3>风格</h3>
          <el-radio-group @change="styleChange" v-model="style">
            <el-radio border :value="0">全部</el-radio>
            <template v-for="item in filterDict?.data.style">
              <el-radio border :value="item.value">{{ item.name }}</el-radio>
            </template>
          </el-radio-group>
        </div>
        <div class="filter-item">
          <h3>空间</h3>
          <el-radio-group @change="spaceChange" v-model="space">
            <el-radio border :value="0">全部</el-radio>
            <template v-for="item in filterDict?.data.space">
              <el-radio border :value="item.value">{{ item.name }}</el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>

      <div v-if="productsList?.length != 0">
        <div class="products-list">
          <template v-for="item in productsList" :key="item.id">
            <NuxtLink class="item" :to="`/products/${item.id}.html`">
              <h3>{{ item.name }}</h3>
              <i></i>
              <img :src="item.coverImage" />
              <div>
                <p>包含：{{ item.includes }}</p>
                <div class="readmore">
                  <Icon class="icon-play" name="icons:play" />
                  了解更多
                </div>
              </div>
            </NuxtLink>
          </template>
        </div>

        <div class="pagination">
          <ClientOnly fallback-tag="span" fallback="分页加载中...">
            <el-pagination
              v-model:current-page="filterData.page"
              v-model:page-size="filterData.size"
              :page-sizes="[3, 6, 9]"
              background
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </ClientOnly>
        </div>
      </div>
      <div v-else>
        <el-empty description="未查询到与该条件匹配的商品，请选择其他品类。" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProductsList {
  id: number;
  name: string;
  coverImage: string;
  includes: string;
}

const category = ref<string | number | boolean | undefined>(0);
const style = ref<string | number | boolean | undefined>(0);
const space = ref<string | number | boolean | undefined>(0);

interface Ifilter {
  category?: string | number | boolean | null;
  style?: string | number | boolean | null;
  space?: string | number | boolean | null;
  page: number;
  size: number;
  status: number;
}
const filterData = reactive<Ifilter>({
  category: null,
  style: null,
  space: null,
  page: 1, // 页面是从1开始的,设置默认值为1
  size: 9,
  status: 1,
});

const total = ref<number | undefined>(0);
const productsList = ref<IProductsList[] | undefined>([]);

// 获取筛选器中各分类的数据
const { data: filterDict } = await useFetch<DataResponsePageDict<IDict[]>>(
  "/open/dict/info/data",
  {
    method: "post",
    body: { types: ["category", "style", "space"] },
  }
);

// 获取默认产品列表数据时，请求参数不能使用filterData响应式数据，否则在点击不同的radio时会重复发送网络请求
const { data } = await useFetch<DataResponsePage<IProductsList[]>>(
  "/open/products/info/page",
  {
    method: "post",
    body: { page: 1, size: 9, status: 1 },
  }
);

productsList.value = data.value?.data.list;
total.value = data.value?.data.pagination.total;

const filterProduct = async (filterData: Ifilter) => {
  const data = await $fetch<DataResponsePage<IProductsList[]>>(
    "/open/products/info/page",
    {
      method: "post",
      body: filterData,
    }
  );
  // console.log(data);
  return data.data;
};

const categoryChange = async (val: string | number | boolean | undefined) => {
  console.log("打印第一次！");
  if (val === 0) {
    filterData.category = null;
  } else {
    filterData.category = val;
  }

  filterProduct(filterData).then((res) => {
    productsList.value = res.list;
    total.value = res.pagination.total;
  });
};

const styleChange = (val: string | number | boolean | undefined) => {
  if (val === 0) {
    filterData.style = null;
  } else {
    filterData.style = val;
  }

  filterProduct(filterData).then((res) => {
    productsList.value = res.list;
    total.value = res.pagination.total;
  });
};

const spaceChange = (val: string | number | boolean | undefined) => {
  if (val === 0) {
    filterData.space = null;
  } else {
    filterData.space = val;
  }

  filterProduct(filterData).then((res) => {
    productsList.value = res.list;
    total.value = res.pagination.total;
  });
};

const handleSizeChange = (val: number) => {
  filterData.size = val;
  filterProduct(filterData).then((res) => {
    productsList.value = res.list;
    total.value = res.pagination.total;
  });
};
const handleCurrentChange = (val: number) => {
  filterData.page = val;
  filterProduct(filterData).then((res) => {
    productsList.value = res.list;
    total.value = res.pagination.total;
  });
};
</script>
<style lang="less" scoped>
.products {
  width: 100%;

  .header {
    img {
      width: 100%;
      display: block;
    }
  }

  .container {
    width: 100%;
    background: url(/images/qwdz_bg.jpg) top center no-repeat;
    background-size: 100% 100%;
    padding: 100px 0;

    .filter {
      width: 1200px;
      margin: 40px auto 80px;

      .filter-item {
        margin-bottom: 20px;

        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }

      :deep(.el-radio) {
        line-height: 32px;
      }
      :deep(.el-radio__input) {
        display: none;
      }
    }

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

    .products-list {
      width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 380px); /* 每行3个，每个宽度为380px */
      gap: 30px; /* 固定间距 */
      justify-content: space-between; /* 子元素之间的间距自适应 */

      .item {
        width: 380px;
        color: #333;
        margin-bottom: 30px;

        h3 {
          font-size: 18px;
        }

        i {
          width: 18px;
          height: 10px;
          border-bottom: 2px solid var(--theme-color);
          display: block;
          margin-bottom: 20px;
        }

        img {
          width: 100%;
          display: block;
        }

        div {
          padding: 25px;
          font-size: 14px;
          color: #939393;
          background-color: #fff;
          -webkit-box-shadow: 0px 2px 13px #ececec;
          box-shadow: 0px 0px 10px #ececec;

          p {
            color: #939393;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .readmore {
            width: 120px;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #272727;
            padding: 8px 0;
            border: 1px solid #e4e4e4;
            margin-top: 10px;
            box-shadow: none;

            .icon-play {
              margin-right: 6px;
              font-size: 16px;
              color: var(--theme-color);
            }
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
}
</style>
